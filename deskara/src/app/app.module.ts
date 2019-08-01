import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { FeatureSectionComponent } from './feature-section/feature-section.component';
import { TestimonialSectionComponent } from './testimonial-section/testimonial-section.component';
import { FooterSectionComponent } from './footer-section/footer-section.component';
import { SharedComponent } from './shared/shared.component';
import { CountriesService } from "./shared/services/countries.service";

@NgModule({
  declarations: [
    AppComponent, 
    FeatureSectionComponent,
    TestimonialSectionComponent,
    FooterSectionComponent,
    SharedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    CountriesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
