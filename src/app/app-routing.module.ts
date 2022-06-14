import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlackHoleComponent } from './black-hole/black-hole.component';
import { HangarComponent } from './space/hangar/hangar.component';

const routes: Routes = [
	{path: '', redirectTo: 'space', pathMatch: 'full'},
	{ path: 'space', component: HangarComponent },
	{path: '**', component: BlackHoleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
