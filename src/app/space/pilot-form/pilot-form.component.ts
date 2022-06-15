import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-pilot-form',
  templateUrl: './pilot-form.component.html',
  styleUrls: ['./pilot-form.component.scss']
})
export class PilotFormComponent implements OnInit {
	form = new FormGroup({
		id: new FormControl(null),
		firstName: new FormControl('', { nonNullable: true }),
		lastName: new FormControl('', { nonNullable: true }),
		imageUrl: new FormControl('', { nonNullable: true }),
	})

  constructor(private route: ActivatedRoute) { }

	ngOnInit(): void {
		this.route.data
			.pipe(
				map((data) => {
					return data['pilot']
				})
			)
			.subscribe(
				(pilot) => {
					return this.form.patchValue(pilot)
				}
			);
  	}

}
