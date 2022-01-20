import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUSComponent } from './about-us/about-us.component';
import { ContactUSComponent } from './contact-us/contact-us.component';
import { LoginComponent } from './login/login.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { UserDetailsComponent } from './user-details/user-details.component';

const routes: Routes = [{ path: '', redirectTo: 'user-details', pathMatch: 'full' },
{ path: 'about-us', component: AboutUSComponent },
{ path: 'contact-us', component: ContactUSComponent },
{ path: 'login', component: LoginComponent },
{ path: 'registeration', component: RegisterationComponent },
{ path: 'user-details', component: UserDetailsComponent },

{ path: '**', component: AboutUSComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
