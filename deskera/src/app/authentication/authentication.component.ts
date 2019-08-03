import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { WpAuthService } from '../shared/services/wp-auth.service';
import { WP_USER, WP_PASS } from "../shared/constant/credential.contants";

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

  user = {
    login: '',
    password: ''
  }

  username = WP_USER;
  password = WP_PASS;
  
  @Input() token;
  @Output() tokenChange = new EventEmitter<string>();


  constructor( 
    private wpAuth: WpAuthService ) 
  {}

  ngOnInit() {
  this.auth()
  }
  
  /* 
    Initialized the authentication
  */
  auth() { 
    this.wpAuth.submitAuth(this.username, this.password).subscribe(res => { 
      if (res['token']) {
        this.token = res['token'];
        console.log(this.token)
        this.tokenChange.emit(this.token);
      }
    });

  } 

}
