import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CovidApiService {

  //attributes
  base_url:string='https://api.covid19api.com';

  //constructor
  constructor(private api_client:HttpClient) { }

  //methods
  public GetAvailableCountries()
  {
    return this.api_client.get(`${this.base_url}/countries`);
  }

  public GetReportedCasesOfCountry(slug:string)
  {
    return this.api_client.get(`${this.base_url}/total/dayone/country/${slug}`);
  }
}
