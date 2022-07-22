import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { ObservableComponent } from './observables/observable/observable.component';
import { PageNotFoundComponent } from './notFound/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    CatalogueComponent,
    ObservableComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
