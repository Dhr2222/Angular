import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { authGuard } from '../auth.guard';

const routes: Routes = [
  {path:'', component:LoginComponent, pathMatch: 'full'},
  {path:'side-nav',component:SideNavComponent,pathMatch: 'full'},
  {path:'dashboard',component:DashboardComponent,canActivate:[authGuard]},
  {path:'login',component:LoginComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BudgetPlannerRoutingModule { }
