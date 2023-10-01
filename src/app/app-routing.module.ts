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

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
