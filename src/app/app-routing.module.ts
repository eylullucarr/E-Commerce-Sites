import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
 {
  path:'home',
  pathMatch: 'full',
  loadComponent: () =>
    import('./pages/home/home.component').then((m) => m.HomeComponent),
 },
 {
  path:'',
  redirectTo:'home',
  pathMatch:'full'
 
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
