import { Component, OnInit } from '@angular/core'
import { FormGroup, FormBuilder } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import { Empresa } from './shared/empresa.model'
import { EmpresaService } from './shared/empresa.service'


@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.sass']
})
export class EmpresasComponent implements OnInit {
  form!: FormGroup
  dados!: Empresa
  empresaId: number = 0
  verbo: string = ''

  constructor(
    private service: EmpresaService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.empresaId = this.route.snapshot.params['empresaId']
    this.verbo = this.route.snapshot.params['verbo']
    this.iniciarForm()

    if (this.empresaId !== null && this.empresaId !== undefined && this.empresaId !== 0)
      this.service.pegarPorId(this.empresaId).subscribe(retorno => {
        this.form.patchValue(retorno)
      }, error => {
        console.log(error)
      })
  }

  iniciarForm() {
    this.form = this.fb.group({
      id: [0],
      cnpj: [null],
      nome: [null],
      cep: [null],
      logradouro: [null],
      complemento: [null],
      numero: [null],
      bairro: [null],
      cidade: [null],
      pais: [null]
    })
  }

  salvar() {
    this.dados = Object.assign(new Empresa(), this.form.getRawValue())

    if (this.verbo === 'incluir')
      this.service.cadastrarT(this.dados).subscribe(() => {
        this.router.navigate(['/empresas'])
      })
    else if (this.verbo === 'alterar')
      this.service.alterarT(this.dados).subscribe(() => {
        this.router.navigate(['/empresas'])
      })
    else
      this.service.excluirT(this.empresaId).subscribe(() => {
        this.router.navigate(['/empresas'])
      })
  }

}
