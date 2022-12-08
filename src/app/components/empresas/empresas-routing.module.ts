import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpresasComponent } from './empresas.component'
import { ListaEmpresasComponent } from './lista-empresas.component'

const routes: Routes = [
  { path: '', component: ListaEmpresasComponent },
  { path: ':empresaId/:verbo', component: EmpresasComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpresasRoutingModule { }