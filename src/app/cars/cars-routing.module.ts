import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { CarDetailsComponent } from './car-details/car-details.component';


const CARS_ROUTERS: Route[] = [
     { path: 'cars/:id', component: CarDetailsComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(CARS_ROUTERS)
    ],
    exports: [
        RouterModule
    ]
})

export class CarsRoutingModule  {}
