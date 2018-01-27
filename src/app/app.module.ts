import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { CarsModule } from './cars/cars.module';
import { CarsService } from './cars/cars.service';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { RouterModule } from '../../node_modules/@angular/router/';
import { AppRoutingModule } from './app-routing.module';
import { CarsRoutingModule } from './cars/cars-routing.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,       //// tutaj_moduly;
    FormsModule,
    HttpModule,
    CarsModule,
    CoreModule,
    AppRoutingModule,
    CarsRoutingModule

  ],
  providers: [CarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
