import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SummaryComponent} from "../../components/summary/summary.component";
import {HomeComponent} from "../../components/home/home.component";
import { ContactComponent } from '../../components/contact/contact.component';
import {CovidApiService} from "../../services/covid-api.service";
import { ChartsModule } from "ng2-charts";
import {LocationService} from "../../services/location.service";

@NgModule({
  providers:[
    CovidApiService,
    LocationService
  ],

  declarations: [
    SummaryComponent,
    HomeComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    ChartsModule,
  ],
  exports:[
    SummaryComponent,
    HomeComponent,
    ContactComponent
  ]
})
export class TrackerModule { }
