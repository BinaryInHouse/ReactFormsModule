import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ListadoComponent } from './listado/listado.component';
import { RecetaComponent } from './receta/receta.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { ModificarComponent } from './modificar/modificar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AutorizacionGuard } from './autorizacion.guard';


const rutas: Routes = [

  { path: '', component: LoginComponent },

  { path: 'listado', component: ListadoComponent, canActivate: [AutorizacionGuard] },
  { path: 'agregar', component: NuevoComponent, canActivate: [AutorizacionGuard] },
  { path: 'modificar/:id', component: ModificarComponent },


  { path: '**', redirectTo: '' }

]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListadoComponent,
    RecetaComponent,
    NuevoComponent,
    ModificarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(rutas),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
