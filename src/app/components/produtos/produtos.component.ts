import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import { Produto } from './shared/produto.model'
import { ProdutoService } from './shared/produto.service'

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.sass']
})
export class ProdutosComponent implements OnInit {
  form!: FormGroup
  dados!: Produto
  produtoId: number = 0
  verbo: string = ''

  constructor(
    private service: ProdutoService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.produtoId = this.route.snapshot.params['produtoId']
    this.verbo = this.route.snapshot.params['verbo']
    this.iniciarForm()

    if (this.produtoId !== null && this.produtoId !== undefined && this.produtoId !== 0)
      this.service.pegarPorId(this.produtoId).subscribe(retorno => {
        this.form.patchValue(retorno)
      }, error => {
        console.log(error)
      })
  }

  iniciarForm() {
    this.form = this.fb.group({
      id: [0],
      descricao: [null],
      codigo: [null],
      preco: [null],
      image: [null]
    })
  }

  salvar() {
    this.dados = Object.assign(new Produto(), this.form.getRawValue())

    if (this.verbo === 'incluir')
      this.service.cadastrarT(this.dados).subscribe(() => {
        this.router.navigate(['/produtos'])
      })
    else if (this.verbo === 'alterar')
      this.service.alterarT(this.dados).subscribe(() => {
        this.router.navigate(['/produtos'])
      })
    else
      this.service.excluirT(this.produtoId).subscribe(() => {
        this.router.navigate(['/produtos'])
      })
  }

}
