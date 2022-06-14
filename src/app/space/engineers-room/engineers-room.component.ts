import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OrderFormValue } from '../order-form-value';
import { SpaceShip } from '../space-ship';
import { SpaceShipType } from '../space-ship-type';
import { SpaceShipService } from '../space-ship.service';

interface ShipType {
  label: string;
  value: SpaceShipType;
}

@Component({
  selector: 'app-engineers-room',
  templateUrl: './engineers-room.component.html',
  styleUrls: ['./engineers-room.component.scss']
})
export class EngineersRoomComponent implements OnInit {

  @Output() shipProduced = new EventEmitter<SpaceShip>();
  isProducing: boolean = false;

  spaceShipTypes: ShipType[] = [
    {label: 'Myśliwiec', value: SpaceShipType.Fighter},
    {label: 'Bombowiec', value: SpaceShipType.Bomber}
  ];

  form = new FormGroup({
    shipType: new FormControl(SpaceShipType.Fighter, {
      validators: [Validators.required],
      nonNullable: true
    }),
    shipCount: new FormControl(1, {
      validators: [Validators.required, Validators.min(1), Validators.max(5)],
      nonNullable: true
    })
  })

  constructor(
    private spaceShipService: SpaceShipService
  ) { }

  ngOnInit(): void {
  }

  orderSpaceShips() {
    this.isProducing = true;
    const formValue: OrderFormValue = this.form.getRawValue();
    console.log(formValue);
    this.spaceShipService.produceShips(formValue)
      .subscribe({
        next: (ship) => this.shipProduced.emit(ship),
        complete: () => this.isProducing = false
      });
  }
}
