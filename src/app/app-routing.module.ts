import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './componentes/productos/productos.component';
import { SamplesComponent } from './componentes/samples/samples.component';
import { PresetsComponent } from './componentes/presets/presets.component';
import { SkinsComponent } from './componentes/skins/skins.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { ErrorComponent } from './componentes/error/error.component';

const routes: Routes = [
  {path: '', component: ProductosComponent},
  {path: 'productos', component: ProductosComponent},
  {path: 'samples', component: SamplesComponent},
  {path: 'presets', component: PresetsComponent},
  {path: 'skins', component: SkinsComponent},
  {path: 'acerca de', component: AcercaDeComponent},
  {path: '**', component: ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
