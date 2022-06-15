import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { PilotValidators } from '../pilot-validators';
import { PilotService } from '../pilot.service';

@Component({
  selector: 'app-pilot-form',
  templateUrl: './pilot-form.component.html',
  styleUrls: ['./pilot-form.component.scss']
})
export class PilotFormComponent implements OnInit {
	form = new FormGroup({
		id: new FormControl(undefined, {nonNullable: true}),
		firstName: new FormControl('', {
			nonNullable: true,
			validators: [Validators.required, PilotValidators.pilotName]
		}),
		lastName: new FormControl(
			'',
			{
				nonNullable: true,
				validators: [Validators.required],
				asyncValidators: [PilotValidators.pilotForbidden],
				updateOn: 'blur'
			}
		),
		imageUrl: new FormControl('', { nonNullable: true }),
	})

	constructor(
		private route: ActivatedRoute,
		private pilotService: PilotService,
		private router: Router
	) { }

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

	save(): void {
		const pilotAttrs = this.form.getRawValue();
		this.pilotService.savePilot(pilotAttrs)
			.subscribe({
				next: () => this.router.navigate(['../..'], { relativeTo: this.route }),
				error: () => alert('Nie udało się zapisać pilota!')
			})
	}
}
