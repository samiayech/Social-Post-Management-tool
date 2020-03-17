import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { AppComponent } from './app.component';
import { CapmaignComponent } from './components/capmaign/capmaign.component';
import { TaskComponent } from './components/task/task.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [

    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent, pathMatch: 'full'},
    {path: 'campaign', component: CapmaignComponent, pathMatch: 'full'},
    {path: 'task', component: TaskComponent, pathMatch: 'full'},
    // {path: '**', redirectTo: '/dashboard', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
