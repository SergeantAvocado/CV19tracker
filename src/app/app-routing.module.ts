import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {SummaryComponent} from "./components/summary/summary.component";

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'cases',component:SummaryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
