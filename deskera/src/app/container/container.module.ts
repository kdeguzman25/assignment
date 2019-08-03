import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser'; 
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 

import { FeatureSectionComponent } from '../feature-section/feature-section.component';
import { TestimonialSectionComponent } from '../testimonial-section/testimonial-section.component';
import { FooterSectionComponent } from '../footer-section/footer-section.component';
import { SharedComponent } from '../shared/shared.component';
import { CountriesService } from "../shared/services/countries.service";
import { ContainerComponent } from '../container/container.component';  
import { AuthenticationComponent } from '../authentication/authentication.component';
import { WpAuthService } from "../shared/services/wp-auth.service";

@NgModule({
  declarations: [
    FeatureSectionComponent,
    TestimonialSectionComponent,
    FooterSectionComponent,
    SharedComponent,
    ContainerComponent,
    AuthenticationComponent
  ],
  providers: [
    CountriesService,
    WpAuthService
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    ContainerComponent
  ]
})
export class ContainerModule { }
