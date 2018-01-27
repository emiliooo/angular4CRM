import { CarsListComponent } from './cars/cars-list/cars-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';


const APP_ROUTERS: Route[] = [
    { path: '', pathMatch: 'full', redirectTo: 'cars' },
    { path: 'cars', component: <any>CarsListComponent }
]


@NgModule({
    imports: [
        RouterModule.forRoot(APP_ROUTERS)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule  () 
{
    
}

