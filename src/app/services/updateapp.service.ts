import { Injectable } from '@angular/core';
import {SwUpdate} from '@angular/service-worker';

@Injectable({
  providedIn: 'root'
})
export class UpdateappService 
{

  constructor(private readonly updates:SwUpdate)
  { 
    this.updates.available.subscribe(event=>
      {
        this.ConfirmUpdate();
      });
  }

  ConfirmUpdate() 
  {
    if(confirm(`a new version has been found, would you like to update?`))
      this.doAppUpdate();
    else
      return;
  }

  doAppUpdate() {
    this.updates.activateUpdate().then(() => document.location.reload());
  }
}
