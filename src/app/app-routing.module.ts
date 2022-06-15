import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlackHoleComponent } from './black-hole/black-hole.component';
import { DestructionRoomComponent } from './space/destruction-room/destruction-room.component';
import { EngineersRoomComponent } from './space/engineers-room/engineers-room.component';
import { HangarComponent } from './space/hangar/hangar.component';

const routes: Routes = [
	{path: 'intel', loadChildren: () => import('./intel/intel.module').then((m) => m.IntelModule) },
	{path: '', redirectTo: 'space', pathMatch: 'full'},
	{
		path: 'space',
		component: HangarComponent,
		children: [
			{path: 'production', component: EngineersRoomComponent},
			{path: 'destruction', component: DestructionRoomComponent},
			{path: '', redirectTo: 'production', pathMatch: 'full'}
		]
	},
	{ path: '**', component: BlackHoleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
