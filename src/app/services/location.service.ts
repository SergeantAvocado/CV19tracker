import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocationService 
{
  response: any;
  baseURL = "https://ipapi.co/json/"
  public userCountryCode:string;

  constructor(private httpClient:HttpClient)
  {
    this.GetUserLocation();
  }

  GetUserLocation()
  {
    this.httpClient.get(this.baseURL).subscribe(res=>
      {
        this.response = res;
        this.userCountryCode = this.response.country_code; //getting user country
      });
  }
}
