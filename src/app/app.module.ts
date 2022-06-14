import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { A2sCommModule } from 'a2s-comm';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HangarComponent } from './space/hangar/hangar.component';
import { SpaceModule } from './space/space.module';

@NgModule({
	declarations: [
		AppComponent,
	],
  imports: [
		BrowserModule,
		AppRoutingModule,
		A2sCommModule,
		SpaceModule,
		HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
