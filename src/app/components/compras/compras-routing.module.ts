import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComprasComponent } from './compras.component'
import { ListaComprasComponent } from './lista-compras.component'

const routes: Routes = [
  { path: '', component: ListaComprasComponent },
  { path: ':compraId/:verbo', component: ComprasComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComprasRoutingModule { }