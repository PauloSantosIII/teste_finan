import { Component, OnInit } from '@angular/core';
import { Produto } from './shared/produto.model'
import { ProdutoService } from './shared/produto.service'

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.sass']
})
export class ListaProdutosComponent implements OnInit {
  lista: Produto[] = []

  constructor(private service: ProdutoService) { }

  ngOnInit(): void {
    this.service.pegarLista().subscribe(retorno => {
      this.lista = retorno
    })
    
  }

}
