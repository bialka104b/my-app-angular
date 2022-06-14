import { Component, Input, OnInit } from '@angular/core';
import { Pilot } from '../pilot';
import { SpaceShip } from '../space-ship';

@Component({
  selector: 'app-pilot',
  templateUrl: './pilot.component.html',
  styleUrls: ['./pilot.component.scss']
})
export class PilotComponent implements OnInit {
	@Input() pilot!: Pilot;
	@Input() spaceShip!: SpaceShip;

  constructor() { }

  ngOnInit(): void {
  }

}
