import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pilot, PilotAttrs } from './pilot';

@Injectable({
  providedIn: 'root'
})
export class PilotService {

	constructor(private http: HttpClient) { }
	getPilots(): Observable<Pilot[]> {
		return this.http.get<PilotAttrs[]>(`${environment.apiUrl}/pilots`).pipe(
			map((data) => data.map((pilotAttrs) => new Pilot(pilotAttrs)))
		);
	}
	
	getPilot(id: number) {
		return this.http.get<PilotAttrs>(`${environment.apiUrl}/pilots/${id}`).pipe(
		map((pilotAttrs) => new Pilot(pilotAttrs))
		);
	}
}
