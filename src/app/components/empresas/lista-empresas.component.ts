import { Component, OnInit } from '@angular/core';
import { Empresa } from './shared/empresa.model'
import { EmpresaService } from './shared/empresa.service'

@Component({
  selector: 'app-lista-empresas',
  templateUrl: './lista-empresas.component.html',
  styleUrls: ['./lista-empresas.component.sass']
})
export class ListaEmpresasComponent implements OnInit {
  lista: Empresa[] = []

  constructor(private service: EmpresaService) { }

  ngOnInit(): void {
    this.service.pegarLista().subscribe(retorno => {
      this.lista = retorno      
    })
    
  }

}
