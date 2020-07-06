import { Component } from '@angular/core';
import {fade} from './animations/MainAnimations';
import {UpdateappService} from './services/updateapp.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[fade]
})
export class AppComponent
{
  title = 'cv19tracker';
  constructor(private update:UpdateappService)
  {}
}
