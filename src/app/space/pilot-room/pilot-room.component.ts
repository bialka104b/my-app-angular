import { Component, OnInit } from '@angular/core';
import { Pilot } from '../pilot';

@Component({
  selector: 'app-pilot-room',
  templateUrl: './pilot-room.component.html',
  styleUrls: ['./pilot-room.component.scss']
})
export class PilotRoomComponent implements OnInit {
  pilots: Pilot[] = [];
  selectedPilot: Pilot | null = null;
  constructor() { }

  ngOnInit(): void {
    this.pilots.push(new Pilot("Sharon KKK", './assets/pilot2.jfif'))
    this.pilots.push(new Pilot("Karl JJJ"));

  }

  select(pilot: Pilot | null): void {
    this.selectedPilot = pilot;
  }

}
