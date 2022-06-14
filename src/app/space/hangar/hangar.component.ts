import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Pilot } from '../pilot';
import { PilotRoomComponent } from '../pilot-room/pilot-room.component';
import { SpaceShip } from '../space-ship';
import { SpaceShipService } from '../space-ship.service';

@Component({
  selector: 'app-hangar',
  templateUrl: './hangar.component.html',
  styleUrls: ['./hangar.component.scss']
})

export class HangarComponent implements OnInit {
  @ViewChild(PilotRoomComponent) pilotRoom!: PilotRoomComponent;
  selectedPilot: Pilot | null = null;
  spaceShips = this.spaceShipService.hangarShips;
  constructor(
    private spaceShipService: SpaceShipService
  ) { }

  ngOnInit(): void {
  }

  setSelectedPilot(pilot: Pilot | null) {
    this.selectedPilot = pilot;
  }

  deassignPilot(spaceShip: SpaceShip) {
    if (!spaceShip.pilot) { return; }
    this.pilotRoom.pilotReturn(spaceShip.pilot);
    spaceShip.pilot = undefined;
  }

  assignPilot(spaceShip: SpaceShip): void {
  if (!this.selectedPilot) { return; }
    spaceShip.pilot = this.selectedPilot;
    this.pilotRoom.pilotLeave(this.selectedPilot);
  }
}
