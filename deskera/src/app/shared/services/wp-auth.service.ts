import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WpAuthService {

  private apiURL: string;

  constructor(
    private httpClient: HttpClient
  ) {
    this.apiURL = "http://localhost/wp-api/wp-json/jwt-auth/v1/token";
  }

  // Submit WP Auth
  public submitAuth(userlogin: string, userpassword: string) { 
    return this.httpClient.post(this.apiURL, {
    username: userlogin,
    password: userpassword
    })
  }
  
}
