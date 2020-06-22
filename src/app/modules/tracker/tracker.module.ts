import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SummaryComponent} from "../../components/summary/summary.component";
import {HomeComponent} from "../../components/home/home.component";
import {CovidApiService} from "../../services/covid-api.service";
import { ChartsModule } from "ng2-charts";

@NgModule({
  providers:[
    CovidApiService,
  ],

  declarations: [
    SummaryComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    ChartsModule
  ],
  exports:[
    SummaryComponent,
    HomeComponent
  ]
})
export class TrackerModule { }
