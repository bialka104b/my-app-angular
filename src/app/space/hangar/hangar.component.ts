import { Component, Input, OnInit } from '@angular/core';
import { BomberShip } from '../bomber-ship';
import { FighterShip } from '../fighter-ship';
import { Pilot } from '../pilot';
import { SpaceShip } from '../space-ship';

@Component({
  selector: 'app-hangar',
  templateUrl: './hangar.component.html',
  styleUrls: ['./hangar.component.scss']
})

export class HangarComponent implements OnInit {
  spaceShips: SpaceShip[] = [];
  constructor() { }

  ngOnInit(): void {
    this.spaceShips.push(new FighterShip(new Pilot('Lee Adama', '/assets/pilot.jfif')));
    this.spaceShips.push(new BomberShip());
  }

}
