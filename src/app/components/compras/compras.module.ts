import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ListaComprasComponent } from './lista-compras.component'
import { NgxCurrencyModule } from 'ngx-currency'
import { ComprasComponent } from './compras.component'
import { ComprasRoutingModule } from './compras-routing.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    ComprasComponent,
    ListaComprasComponent
  ],
  imports: [
    CommonModule,
    ComprasRoutingModule,
    FormsModule,
    NgxCurrencyModule,
    ReactiveFormsModule
  ]
})
export class ComprasModule { }
