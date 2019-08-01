import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CountriesService } from "../shared/services/countries.service";

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss']
})
export class HeroSectionComponent implements OnInit {

  contactForm: FormGroup;
  submitted = false;
  
  region = 'asia';

  constructor(
    private formBuilder: FormBuilder,
    private countries: CountriesService
  ) { }

  ngOnInit() {

    // Call region 
    this.initializeRegion();

    // Initialized reactive form
    this.contactForm = this.formBuilder.group({
        organization: ['', Validators.required],
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        phone:  ['', Validators.required]
    })
  }

  // convenience getter for easy access to form fields
  get f() { return this.contactForm.controls; }

  /* 
    Initialized the value of region data
  */
  initializeRegion() {
    this.countries.getRegions(this.region).subscribe(res => { 
      // console.log(res)
    });
  } 

 

  // Submit form
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.contactForm.invalid) {
        return;
    } else {
      console.log("Form Submitted");
      console.log(this.contactForm.value)
    }

  }
}
