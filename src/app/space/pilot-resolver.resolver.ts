import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Pilot } from './pilot';
import { PilotService } from './pilot.service';

@Injectable({
  providedIn: 'root'
})
export class PilotResolverResolver implements Resolve<Pilot> {

	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Pilot> {
		if (route.params['id'] === 'new') {
     		return of(new Pilot({firstName: '', lastName: '', imageUrl: ''}));
		} else {
			return this.pilotService.getPilot(route.params['id']);
		}
	}

	constructor(private pilotService: PilotService) {

	}
}
