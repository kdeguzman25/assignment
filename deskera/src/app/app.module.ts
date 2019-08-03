import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';  
import { WpApiModule, WpApiLoader,WpApiStaticLoader } from 'wp-api-angular'; 
import { Http } from '@angular/http';


import { ContainerModule } from "../app/container/container.module";
import { AppRoutingModule, MainRoutes } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { RouterModule } from '@angular/router';


// Wordpress API URL
export function WpApiLoaderFactory(http: Http) {
  return new WpApiStaticLoader(http, 'http://localhost/wp-api/wp-json/wp/v2/', '');
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ContainerModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(MainRoutes),
    WpApiModule.forRoot({ 
      provide: WpApiLoader,
      useFactory: (WpApiLoaderFactory),
      deps: [Http]
    })
  ],
  exports: [
    RouterModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

