import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HangarComponent } from './hangar/hangar.component';
import { SpaceShipComponent } from './space-ship/space-ship.component';
import { PilotComponent } from './pilot/pilot.component';



@NgModule({
  declarations: [
    HangarComponent,
    SpaceShipComponent,
    PilotComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HangarComponent
  ],
})
export class SpaceModule { }
