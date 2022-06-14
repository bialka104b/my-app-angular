import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appSpaceImage]'
})
	
export class SpaceImageDirective {
	zoom = 1.0;

	@HostBinding('style.transform') get scale() {
	  return `scale(${this.zoom})`;
	}
	@HostListener('mousemove') zoomIn() {
		console.log("mousemove");

		this.zoom += 0.005;
	}
	@HostListener('mouseout') zoomOut() {
		console.log("mouseout");
		this.zoom = 1.0;
	}

	constructor() { }

}
