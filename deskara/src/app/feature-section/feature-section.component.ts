import { Component, OnInit } from '@angular/core'; 
import { CountriesService } from "../shared/services/countries.service";

@Component({
  selector: 'app-feature-section',
  templateUrl: './feature-section.component.html',
  styleUrls: ['./feature-section.component.scss']
})
export class FeatureSectionComponent implements OnInit {

  countriesData: any

  constructor(
    private countries: CountriesService
  ) { }

  ngOnInit() { 
      // call country
      this.initializeDetectCountry()
  }

   /* 
    Initialized the value of country data
  */
  initializeDetectCountry() {
    this.countries.detectCountry().subscribe(res => { 
      this.countries.getCountry(res['countryCode']).subscribe(resCountry => { 
        console.log(resCountry)
        this.countriesData = resCountry;
      });
    });
  } 
}
