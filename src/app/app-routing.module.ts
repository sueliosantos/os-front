import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/components/home/home.component';
import { TecnicoCreateComponent } from './views/components/tecnico/tecnico-create/tecnico-create.component';
import { TecnicoDeleteComponent } from './views/components/tecnico/tecnico-delete/tecnico-delete.component';
import { TecnicoEditComponent } from './views/components/tecnico/tecnico-edit/tecnico-edit.component';
import { TecnicoListComponent } from './views/components/tecnico/tecnico-list/tecnico-list.component';

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
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
