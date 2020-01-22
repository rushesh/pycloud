import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { HomepagetableComponent } from './components/homepagetable/homepagetable.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { RegisterComponent } from './components/register/register.component';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { UserprofileComponent } from './components/userprofile/userprofile.component';
import { GlobalUser } from '../app/globaluser';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    HomepagetableComponent,
    LoginComponent,
    PagenotfoundComponent,
    AboutusComponent,
    ContactusComponent,
    RegisterComponent,
    UserprofileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule.forRoot(),
    ReactiveFormsModule,
    AlertModule.forRoot(),
    ModalModule.forRoot(),
    HttpClientModule
  ],
  providers: [GlobalUser],
  bootstrap: [AppComponent]
})
export class AppModule { }
