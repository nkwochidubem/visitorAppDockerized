import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VisitorListComponent } from './core/dasboard/components/visitor-list/visitor-list.component';
import { LoginComponent } from './core/auth/components/login/login.component';
import { VisitorComponent } from './core/dasboard/components/visitor/visitor.component';

const routes: Routes = [
  {path: '', redirectTo: 'log-in', pathMatch: 'full'},
  {path: 'log-in', component: LoginComponent},
  {
    path: 'visitors',
    component: VisitorListComponent
  },
  {
    path: 'visitors/new',
    component: VisitorComponent
  },
  {
    path: 'visitors/:id',
    component: VisitorComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
