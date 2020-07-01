import { Component } from '@angular/core';
import {fade} from './animations/MainAnimations'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[fade]
})
export class AppComponent
{
  title = 'cv19tracker';
  constructor()
  {}
}
