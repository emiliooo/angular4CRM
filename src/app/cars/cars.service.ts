import { Injectable } from '@angular/core';
import { Car } from './models/car';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class CarsService {
  private url = 'http://localhost:3000/cars';

  constructor(private http: Http) { }

  getCars(): Observable<Car[]> {
    return this.http.get(this.url)
      .map((res) => res.json());
  }
  getCar(id: number): Observable<Car> {
    return this.http.get(this.url + `/${id}`)
      .map((res) => res.json());
  }
  addCar(data): Observable<Car> {
    return this.http.post(this.url, data)
      .map((res) => res.json());
  }

}
