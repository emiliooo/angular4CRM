
import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';


const CARS_ROUTERS: Route[] = [
    // { path: 'cars/:id', component: <any> CarsListComponent }
];


@NgModule({
    imports: [
        RouterModule.forChild(CARS_ROUTERS)
    ],
    exports: [
        RouterModule
    ]
})

export class CarsRoutingModule {}
