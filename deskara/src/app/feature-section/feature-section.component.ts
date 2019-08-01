import { Component, OnInit, Output, EventEmitter } from '@angular/core'; 
import { CountriesService } from "../shared/services/countries.service";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-feature-section',
  templateUrl: './feature-section.component.html',
  styleUrls: ['./feature-section.component.scss']
})
export class FeatureSectionComponent implements OnInit {

  countriesData: any
  regionData: any
  @Output() regionName = new EventEmitter();
  contactForm: FormGroup;
  submitted = false;

  constructor(
    private countries: CountriesService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() { 
      // call country
      this.initializeDetectCountry()
      // Initialized reactive form
      this.contactForm = this.formBuilder.group({
          organization: ['', Validators.required],
          name: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]],
          countryCode:  [Validators.required],
          phone:  ['', Validators.required]
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
        }); 
      });
    });
  } 
  // Submit form
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.contactForm.invalid) {
        return;
    } else {
      alert("Form Submitted"); 
      console.log(this.contactForm.value)
      this.contactForm.reset();
    }

  }
}
