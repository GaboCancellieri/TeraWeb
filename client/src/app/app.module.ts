import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './layout/menu/menu.component';
import { InicioComponent } from './views/inicio/inicio.component';
import { EmpresaComponent } from './views/empresa/empresa.component';
import { SociosComponent } from './views/socios/socios.component';
import { ServiciosComponent } from './views/servicios/servicios.component';
import { ClientesComponent } from './views/clientes/clientes.component';
import { ContactoComponent } from './views/contacto/contacto.component';
import { FooterComponent } from './layout/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    InicioComponent,
    EmpresaComponent,
    SociosComponent,
    ServiciosComponent,
    ClientesComponent,
    ContactoComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
