import { Component, OnInit } from '@angular/core';
import { CovidApiService } from 'src/app/services/covid-api.service';
import { CountryModel } from 'src/app/models/country';
import { fade, slide } from '../../animations/MainAnimations';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css'],
  animations:[fade,slide]
})
export class SummaryComponent implements OnInit {

  //attributes
  currentDate:string='';
  listOfCountries:any[];
  listOfCases:any[];

  //total attributes
  t_deaths:number;
  t_confirmed:number;
  t_active:number;
  t_recovered:number;
  t_new:number;

  //constructor
  constructor(private covidService:CovidApiService) { }

  //on initialization
  ngOnInit(): void 
  {
    this.currentDate=this.GetSystemDate();
    this.listOfCountries = [];
    this.GetCountryList();
  }

  //methods
  GetSystemDate()
  {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    return `${mm}/${dd}/${yyyy}`;

  }

  GetCountryList()
  {
    this.covidService.GetAvailableCountries().subscribe(res=>
      {
        
        this.listOfCountries = res as any[];
        this.listOfCountries.sort((a,b)=>
        {
          if(a.Country.toLowerCase() > b.Country.toLowerCase())
            return 1;
          if(a.Country.toLowerCase() < b.Country.toLowerCase())
            return -1;
          return 0;
        });
      });
  }

  GetReportedCasesOfCountry(slug:string)
  {
    this.covidService.GetReportedCasesOfCountry(slug).subscribe(res=>
      {
        try 
        {
          this.listOfCases= res as any[];
          this.ConvertDateFormat(this.listOfCases);
          this.GetActualReportData();  
        } catch (error)
        {
          alert(`Sorry, no data provided for ${slug}`);
        }
        
      });
  }

  GetCountrySlug(event:any)
  {
    //event.target.value returns country slug
    let slug = event.target.value;
    this.GetReportedCasesOfCountry(slug);
    this.CleanDataHolders(); //clean previous info if any
  }

  //operation methods
  CleanDataHolders()
  {
    this.listOfCases = [];
    this.t_active = 0;
    this.t_confirmed=0;
    this.t_deaths=0;
    this.t_new = 0;
    this.t_recovered=0;
  }

  GetActualReportData()
  {
    let index=this.listOfCases.length-1;
    let index_alt=this.listOfCases.length-2;
    let actualCase:any = this.listOfCases[index];
    let previousCase:any = this.listOfCases[index_alt];

    this.t_confirmed=actualCase.Confirmed;
    this.t_deaths = actualCase.Deaths;
    this.t_recovered = actualCase.Recovered;
    this.t_active = actualCase.Active;

    this.t_new=actualCase.Confirmed-previousCase.Confirmed;
  }

  private ConvertDateFormat(arr:any[])
  {
    for (let i = 0; i < arr.length; i++) {
      arr[i].Date = this.ISO8601FormatParser(arr[i].Date);
      
    }
  }

  private ISO8601FormatParser(isoDate:string):string
  {
    let date = new Date(isoDate);
    let year = date.getFullYear();
    let month = date.getMonth()+1;
    let dt = date.getDate();
    let day:string;
    let montStr:string;

    if (dt < 10)
    {
      day = '0' + dt;
    }
    else
      day = `${dt}`;

    if (month < 10)
    {
      montStr = '0' + month;
    }
    else  
      montStr=`${month}`;

    return (`${montStr}/${day}/${year}`);
  }

}
