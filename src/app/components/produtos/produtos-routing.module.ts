import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProdutosComponent } from './produtos.component'
import { ListaProdutosComponent } from './lista-produtos.component'

const routes: Routes = [
  { path: '', component: ListaProdutosComponent },
  { path: ':produtoId/:verbo', component: ProdutosComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }