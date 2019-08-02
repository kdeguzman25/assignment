import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 


import { ContainerModule } from "../app/container/container.module";
import { AppRoutingModule, MainRoutes } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,  
  ],
  imports: [
    BrowserModule,
    ContainerModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(MainRoutes),
  ],
  exports: [
    RouterModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
