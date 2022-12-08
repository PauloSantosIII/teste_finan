import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  { path: '', redirectTo: '/empresas', pathMatch: 'full' },
  { path: 'empresas', loadChildren: () => import('./components/empresas/empresas.module').then(m => m.EmpresasModule) },
  { path: 'produtos', loadChildren: () => import('./components/produtos/produtos.module').then(m => m.ProdutosModule) },
  { path: 'compras', loadChildren: () => import('./components/compras/compras.module').then(m => m.ComprasModule) }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
