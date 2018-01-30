import { Component, OnInit, ViewChild } from '@angular/core';
import { Car } from '../models/car';
import { TotalCostComponent } from '../total-cost/total-cost.component';
import { CarsService } from '../cars.service';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.less'],
  providers: [CarsService]
})
export class CarsListComponent implements OnInit {
  @ViewChild('totalcostRef') totalcostRef: TotalCostComponent; // wywoluje metode zagniezdzona

  totalCost: number;
  grossCost: number;

  total: number;
  cars: Car[] = [];
  carForm: FormGroup;

  constructor(private carsService: CarsService,
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.loadCars();
    this.carForm = this.buildCarForm();
  }

  buildCarForm() {
    return this.formBuilder.group({
      model: ['', Validators.required],
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


  loadCars(): void {
    this.carsService.getCars().subscribe((cars) => {
      this.cars = cars;
      this.countTotalCost();
    });
  }

  goToCarDetails(car: Car) {
    this.router.navigate(['/cars', car.id]);
  }

  showGross(): void {
  }

  shownGross(gross: number): void {
    this.grossCost = gross;
  }

  countTotalCost(): void {
    this.totalCost = this.cars
      .map((car) => car.cost)
      .reduce((prev, next) => prev + next);
  }

  addCar() {
    this.carsService.addCar(this.carForm.value).subscribe(() => {
      this.loadCars();
    });
  }
}
