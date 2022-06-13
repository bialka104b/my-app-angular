import { Input } from "@angular/core";
import { SpaceShip } from "./space-ship";



export class BomberShip extends SpaceShip {
  
  constructor() {
    super('Raptor', '/assets/statek-kosmiczny.jpg');
  }
}
