import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {SummaryComponent} from "./components/summary/summary.component";
import {ContactComponent} from './components/contact/contact.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'cases',component:SummaryComponent},
  {path:'DeveloperContact',component:ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
