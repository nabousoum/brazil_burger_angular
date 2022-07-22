import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { PageNotFoundComponent } from './notFound/page-not-found/page-not-found.component';
import { ObservableComponent } from './observables/observable/observable.component';

const routes: Routes = [
  {path:'',redirectTo:'catalogue', pathMatch: 'full' },
  {
    path:"catalogue",
    component: CatalogueComponent
  },
  {
    path:"observable",
    component: ObservableComponent
  },
  {
    path:"notFound",
    component: PageNotFoundComponent
  },
  {
    path: '**',
    redirectTo: "notFound"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
