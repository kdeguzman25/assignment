import { Component, OnInit, Output, EventEmitter } from '@angular/core'; 
import { CountriesService } from "../shared/services/countries.service";
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms'; 
import { WpAuthService } from '../shared/services/wp-auth.service';
import { WP_USER, WP_PASS } from "../shared/constant/credential.contants";
import { WpApiPosts } from 'wp-api-angular';
import { Headers } from '@angular/http';

@Component({
  selector: 'app-feature-section',
  templateUrl: './feature-section.component.html',
  styleUrls: ['./feature-section.component.scss']
})
export class FeatureSectionComponent implements OnInit {
  nrSelect;
  countriesData: any
  regionData: any
  @Output() regionName = new EventEmitter();
  contactForm: FormGroup;
  submitted = false;
  defaultCallingCode = false;
  namePattern = '^[a-zA-Z0-9 ]+$';
  phonePattern = '^[0-9]+$';
  username = WP_USER;
  password = WP_PASS;
  token
  postData = {}

  constructor(
    private countries: CountriesService,
    private formBuilder: FormBuilder,
    private wpAuth: WpAuthService,
    private wpApiPosts: WpApiPosts 
  ) { }

  ngOnInit() { 

      // Initialized WP Token Auth 
      this.auth()
      // call country
      this.initializeDetectCountry()
      // Initialized reactive form
      this.contactForm = this.formBuilder.group({
        testimony: ['', 
            [
              Validators.required 
            ]
          ],
          bearerToken: ['', 
            [
              Validators.required 
            ]
          ],
          organization: ['', 
            [
              Validators.required,
              Validators.pattern(this.namePattern),
            ]
          ],
          name: ['', 
            [
              Validators.required,
              Validators.pattern(this.namePattern),
            ]
          ],
          email: ['', [Validators.required, Validators.email]], 
          countryCode: ['', Validators.required],
          phone:  ['',
           [
             Validators.required,
             Validators.pattern(this.phonePattern),
            ]
          ]
      })
  }

  // convenience getter for easy access to form fields
  get f() { return this.contactForm.controls; }

   /* 
    Initialized the value of country data, region data
  */
  initializeDetectCountry() {
    this.countries.detectCountry().subscribe(res => { 
      this.countries.getCountry(res['countryCode']).subscribe(resCountry => {  
        this.countriesData = resCountry; 
        this.countries.getRegions(resCountry['region']).subscribe(resRegion => {  
          this.regionData = resRegion 
          this.nrSelect = this.countriesData['callingCodes'][0];
        }); 
      });
    });
  } 
   /* 
    Initialized the authentication
  */
 auth() { 
  this.wpAuth.submitAuth(this.username, this.password).subscribe(res => { 
    if (res['token']) {
      this.token = res['token']; 
    }
  });

}
  // Submit form
  onSubmit() {
    this.submitted = true;  

    // stop here if form is invalid
    if (this.contactForm.invalid) {
        return;
    } else {
       
      // Set authorization header
      let headers: Headers = new Headers({
        'Authorization': 'Bearer ' + this.contactForm.value['bearerToken']
      });

      // prepare post data
      this.postData = { 
        "title": this.contactForm.value['organization'],
        "content": '"'+this.contactForm.value['testimony']+'"',
        "fields": {
          "name": this.contactForm.value['name'],
          "email_address": this.contactForm.value['email'],
          "phone_number": this.contactForm.value['countryCode']+this.contactForm.value['phone'],
          "profile_picture": 'http://localhost:4200/assets/images/person_3.jpg',
        },
        "status": 'publish',
      } 
      // Submit Post DAta
      this.wpApiPosts.create(this.postData, { headers: headers })
      .toPromise()
      .then( response => {
        console.log(response) 
        alert("Success")
        window.location.reload();        
      }) 
    }

  }
}
