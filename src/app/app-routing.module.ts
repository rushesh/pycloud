import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../app/components/login/login.component';
import { PagenotfoundComponent } from '../app/components/pagenotfound/pagenotfound.component';
import { CarouselComponent } from '../app/components/carousel/carousel.component';
import { ContactusComponent } from '../../src/app/components/contactus/contactus.component';
import { AboutusComponent } from '../../src/app/components/aboutus/aboutus.component';
import { RegisterComponent } from '../app/components/register/register.component';
import { UserprofileComponent } from '../app/components/userprofile/userprofile.component';
const routes: Routes = [
  { path: 'registeruser', component: RegisterComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'login', component: LoginComponent },
  { path: 'userprofile', component: UserprofileComponent },
  { path:'', component: CarouselComponent },
  { path: '**', component: PagenotfoundComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
