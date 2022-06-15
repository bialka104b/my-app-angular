import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { IntelBrowserComponent } from './intel-browser/intel-browser.component';
import { Routes } from '@angular/router';
import { IntelRoutingModule } from './intel-routing.module';


@NgModule({
  	declarations: [
		IntelBrowserComponent
	],
 	 imports: [
		CommonModule,
		ReactiveFormsModule,
		IntelRoutingModule
  	]
})
export class IntelModule { }
