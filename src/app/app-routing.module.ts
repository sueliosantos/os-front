import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/components/home/home.component';
import { TecnicoCreateComponent } from './views/components/tecnico/tecnico-create/tecnico-create.component';
import { TecnicoDeleteComponent } from './views/components/tecnico/tecnico-delete/tecnico-delete.component';
import { TecnicoEditComponent } from './views/components/tecnico/tecnico-edit/tecnico-edit.component';
import { TecnicoListComponent } from './views/components/tecnico/tecnico-list/tecnico-list.component';
import { ClienteListComponent } from './views/components/cliente/cliente-list/cliente-list.component';
import { ClienteCreateComponent } from './views/components/cliente/cliente-create/cliente-create.component';
import { ClienteEditComponent } from './views/components/cliente/cliente-edit/cliente-edit.component';
import { ClienteDeleteComponent } from './views/components/cliente/cliente-delete/cliente-delete.component';
import { OsListComponent } from './views/components/os/os-list/os-list.component';
import { OsCreateComponent } from './views/components/os/os-create/os-create.component';
import { OsEditComponent } from './views/components/os/os-edit/os-edit.component';
import { OsViewComponent } from './views/components/os/os-view/os-view.component';
import { OsClosedComponent } from './views/components/os/os-closed/os-closed.component';
import { LoginComponent } from './views/components/login/login.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },

  {
    path: '',
    component: HomeComponent, canActivate: [AuthGuard], children: [

      {
        path: 'tecnicos',
        component: TecnicoListComponent
      },
      {
        path: 'tecnicos/create',
        component: TecnicoCreateComponent
      },
      {
        path: 'tecnicos/edit/:id',
        component: TecnicoEditComponent
      },
      {
        path: 'tecnicos/delete/:id',
        component: TecnicoDeleteComponent
      },
      {
        path: 'clientes',
        component: ClienteListComponent
      },
      {
        path: 'clientes/create',
        component: ClienteCreateComponent
      },
      {
        path: 'clientes/edit/:id',
        component: ClienteEditComponent
      },
      {
        path: 'clientes/delete/:id',
        component: ClienteDeleteComponent
      }
      ,
      {
        path: 'os',
        component: OsListComponent
      },
      {
        path: 'os/create',
        component: OsCreateComponent
      },
      {
        path: 'os/edit/:id',
        component: OsEditComponent
      },
      {
        path: 'os/view/:id',
        component: OsViewComponent
      },
      {
        path: 'os/closed',
        component: OsClosedComponent
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
