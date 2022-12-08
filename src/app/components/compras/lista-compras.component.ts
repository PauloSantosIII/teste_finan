import { Component, OnInit } from '@angular/core';
import { ComprasService } from './shared/compra.service'
import { Compras } from './shared/compras.model'

@Component({
  selector: 'app-lista-compras',
  templateUrl: './lista-compras.component.html',
  styleUrls: ['./lista-compras.component.sass']
})
export class ListaComprasComponent implements OnInit {
  lista: Compras[] = []

  constructor(private service: ComprasService) { }

  ngOnInit(): void {
    this.service.pegarLista().subscribe(retorno => {
      this.lista = retorno      
    })
    
  }

}
