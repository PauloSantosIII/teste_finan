import { Endereco } from 'src/app/core/models/endereco.model'

export class Empresa {
  constructor(
    public id?: number,
    public cnpj?: string,
    public nome?: string,
    public endereco?: Endereco
  ) { }
}