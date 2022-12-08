import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { EmpresasComponent } from './empresas.component'
import { ListaEmpresasComponent } from './lista-empresas.component'
import { EmpresasRoutingModule } from './empresas-routing.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [EmpresasComponent, ListaEmpresasComponent],
  imports: [
    CommonModule,
    EmpresasRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EmpresasModule { }
  