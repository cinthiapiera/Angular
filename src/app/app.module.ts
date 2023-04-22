import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrimercomponenteComponent } from './primercomponente/primercomponente.component';
import { SegundocomponenteComponent } from './segundocomponente/segundocomponente.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimercomponenteComponent,
    SegundocomponenteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
