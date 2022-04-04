import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatChipsModule} from '@angular/material/chips';

import {MatIconModule} from '@angular/material/icon';
import { LoadingComponent } from './loading/loading.component';
import { PokeseleccionComponent } from './pokeseleccion/pokeseleccion.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { RegistroComponent } from './registro/registro.component';
import { ProcessComponent } from './process/process.component';
import { BarwidthDirective } from './directives/barwidth.directive';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    LoadingComponent,
    PokeseleccionComponent,
    HomeComponent,
    NavbarComponent,
    RegistroComponent,
    ProcessComponent,
    BarwidthDirective,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatDatepickerModule, 
    MatInputModule,
    MatNativeDateModule,
    MatChipsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
