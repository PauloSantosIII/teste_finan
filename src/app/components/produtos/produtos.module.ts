import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NgxCurrencyModule } from 'ngx-currency'
import { ListaProdutosComponent } from './lista-produtos.component';
import { ProdutosComponent } from './produtos.component'
import { ProdutosRoutingModule } from './produtos-routing.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    ProdutosComponent,
    ListaProdutosComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxCurrencyModule,
    ProdutosRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProdutosModule { }
