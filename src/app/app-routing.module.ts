import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {StartseiteComponent } from './startseite/startseite.component';
import { FilmListComponent } from './film-list/film-list.component';
import { FilmDetailsComponent } from './film-details/film-details.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'startseite',
    pathMatch: 'full'
  },
  {
    path: 'startseite',
    component: StartseiteComponent
  },
  {
    path: 'films',
    component: FilmListComponent
  },
  {
    path: 'films/:gtin',
    component: FilmDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
