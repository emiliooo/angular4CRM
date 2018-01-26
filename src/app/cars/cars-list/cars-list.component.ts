import { Component, OnInit, ViewChild } from '@angular/core';
import { Car } from '../models/car';
import { TotalCostComponent } from '../total-cost/total-cost.component';
import { CarsService } from '../cars.service';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.less'],
  providers: [CarsService]
}) 
export class CarsListComponent implements OnInit {
  @ViewChild("totalcostRef") totalcostRef: TotalCostComponent; // wywoluje metode zagniezdzona

  totalCost: number;
  grossCost: number;

  cars: Car[] = [];

  constructor(private carsService: CarsService) { }

  ngOnInit() {
    this.totalcostRef.showGross();
    this.loadCars();
  }

  loadCars(): void {
    this.carsService.getCars().subscribe((cars) => {
      this.cars = cars;
    });
  }

  showGross(): void {

  }
  shownGross(gross: number): void {
    this.grossCost = gross;
  }


}
