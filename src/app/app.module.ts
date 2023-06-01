import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { SamplesComponent } from './componentes/samples/samples.component';
import { PresetsComponent } from './componentes/presets/presets.component';
import { SkinsComponent } from './componentes/skins/skins.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { ErrorComponent } from './componentes/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    SamplesComponent,
    PresetsComponent,
    SkinsComponent,
    AcercaDeComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
