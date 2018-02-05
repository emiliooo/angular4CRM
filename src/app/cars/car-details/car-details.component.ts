import { Component, OnInit } from '@angular/core';
import { CarsService } from '../cars.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from '../models/car';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.less']
})
export class CarDetailsComponent implements OnInit {
  car: Car;
  carForm: FormGroup;

  constructor(private carsService: CarsService,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private router: Router
  ) {}

  ngOnInit() {
    this.loadCar();
    this.carForm = this.buildCarForm();
  }

  loadCar() {
    const id = +this.route.snapshot.params['id'];
    this.carsService.getCar(id).subscribe((res) => {
      this.car = res;
    });
  }

  buildCarForm() {
    return this.formBuilder.group({
      model: [this.car.cost, Validators.required],
      type: '',
      plate: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(7)]], // required wymagany
      deliveryDate: '',
      deadline: '',
      color: '',
      power: '',
      clientfirstName: '',
      clientsurname: '',
      cost: '',
      isFullyDamaged: ''
    });
  }

  updateCar() {
    this.carsService.updateCar(this.car.id, this.carForm.value).subscribe(() => {
      this.router.navigate(['/cars']);
    });
  }

}
