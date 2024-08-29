import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './project_comp/login/login.component';
import { SignupComponent } from './project_comp/signup/signup.component';
import { DoctorComponent } from './project_comp/doctor/doctor.component';
import { PationtComponent } from './project_comp/pationt/pationt.component';
import { UpdateComponent } from './project_comp/update/update.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'pationt',
    component: PationtComponent,
    children: [{ path: 'update', component: UpdateComponent }],
  },
  { path: 'doctor', component: DoctorComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
