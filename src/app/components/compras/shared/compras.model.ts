export class Compras {
  constructor(
    public id?: number,
    public produtoId?: number,
    public produto?: string,
    public fornecedorId?: number,
    public fornecedor?: string,
    public quantidade?: number,
    public precoUn?: number,
    public total?: number
  ) { }
}
