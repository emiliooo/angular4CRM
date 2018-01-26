import { Injectable } from '@angular/core';
import { Car } from './models/car';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class CarsService {

  constructor(private http: Http) { }

  getCars(): Observable <Car[]> {
    return this.http.get('http://localhost:3000/cars')
         .map((res) => res.json() );
  }

}
