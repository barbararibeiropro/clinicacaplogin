import { AppComponent } from './app.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroContatoComponent } from './cadastro-contato/cadastro-contato.component';
import { ConsultaContatoComponent } from './consulta-contato/consulta-contato.component';
import { LoginComponent } from './login/login.component';
import { RegistrarComponent } from './registrar/registrar.component';


const routes: Routes = [{

path: '',
component: AppComponent

},

  {
    path: 'cadastrocontato',
    component: CadastroContatoComponent
  },
  {
    path: 'consultacontato',
    component: ConsultaContatoComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path:'registrar',
    component: RegistrarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }