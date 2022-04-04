import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoadingComponent } from './loading/loading.component';
import { PokeseleccionComponent } from './pokeseleccion/pokeseleccion.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'equipo', component: PokeseleccionComponent},
  { path: 'profile', component: ProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
