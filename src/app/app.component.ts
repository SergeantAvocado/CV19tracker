import { Component } from '@angular/core';
import { UpdateappService} from "./services/updateapp.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  title = 'cv19tracker';
  constructor(private updatesService:UpdateappService)
  {
  
  }
}
