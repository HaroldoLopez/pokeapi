import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoadingComponent } from './loading/loading.component';
import { PokeseleccionComponent } from './pokeseleccion/pokeseleccion.component';
import { ProcessComponent } from './process/process.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  { path: '', component: ProcessComponent},
  { path: 'home', component: ProcessComponent},
  { path: 'equipo', component: PokeseleccionComponent},
  // { path: 'profile', component: ProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
