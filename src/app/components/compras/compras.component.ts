import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import { ComprasService } from './shared/compra.service'
import { Compras } from './shared/compras.model'

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.sass']
})
export class ComprasComponent implements OnInit {
  form!: FormGroup
  dados!: Compras
  compraId: number = 0
  verbo: string = ''

  constructor(
    private service: ComprasService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.compraId = this.route.snapshot.params['compraId']
    this.verbo = this.route.snapshot.params['verbo']
    this.iniciarForm()

    if (this.compraId !== null && this.compraId !== undefined && this.compraId !== 0)
      this.service.pegarPorId(this.compraId).subscribe(retorno => {
        this.form.patchValue(retorno)
      }, error => {
        console.log(error)
      })
  }

  iniciarForm() {
    this.form = this.fb.group({
      id: [0],
      produtoId: [null],
      produto: [null],
      fornecedorId: [null],
      fornecedor: [null],
      quantidade: [null],
      precoUn: [null],
      total: [null]
    })
  }

  salvar() {
    this.dados = Object.assign(new Compras(), this.form.getRawValue())

    if (this.verbo === 'incluir')
      this.service.cadastrarT(this.dados).subscribe(() => {
        this.router.navigate(['/compras'])
      })
    else if (this.verbo === 'alterar')
      this.service.alterarT(this.dados).subscribe(() => {
        this.router.navigate(['/compras'])
      })
    else
      this.service.excluirT(this.compraId).subscribe(() => {
        this.router.navigate(['/compras'])
      })
  }

}
