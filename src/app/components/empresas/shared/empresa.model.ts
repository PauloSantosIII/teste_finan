export class Empresa {
  constructor(
    public id?: number,
    public cnpj?: string,
    public nome?: string,
    public cep?: string,
    public logradouro?: string,
    public complemento?: string,
    public numero?: number | string,
    public bairro?: string,
    public cidade?: string,
    public pais?: string
  ) { }
}