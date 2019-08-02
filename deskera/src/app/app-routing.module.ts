import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
/*
  Main OSP Routes
*/
export const MainRoutes: Routes = [
  
  // Fixed URL
  { path: 'country', component: ContainerComponent }

];




