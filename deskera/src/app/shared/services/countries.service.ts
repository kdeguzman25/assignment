import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
 
  private apiURL: string;
  private detectCountryUrl: string;

  constructor(
    private httpClient: HttpClient
  ) {
    this.apiURL = "https://restcountries.eu/rest/v2/";
    this.detectCountryUrl = "http://ip-api.com/json";
  }

  // Get Countries by region
  public getRegions(regions: string): Observable<any> {
    return this.httpClient.get(this.apiURL +'region/'+ regions);
  }

  // get Country by code
  public getCountry(countryCode: string): Observable<any> {
    return this.httpClient.get(this.apiURL +'alpha/'+ countryCode);
  }

  // Auto detect country
  public detectCountry(): Observable<any> {
    return this.httpClient.get(this.detectCountryUrl);
  }
}
