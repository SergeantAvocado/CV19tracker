import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavbarComponent} from "../../components/navbar/navbar.component";
import {SummaryComponent} from "../../components/summary/summary.component";
import {HomeComponent} from "../../components/home/home.component";
import {CovidApiService} from "../../services/covid-api.service";

@NgModule({
  providers:[
    CovidApiService,
  ],

  declarations: [
    NavbarComponent,
    SummaryComponent,
    HomeComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NavbarComponent,
    SummaryComponent,
    HomeComponent
  ]
})
export class TrackerModule { }
