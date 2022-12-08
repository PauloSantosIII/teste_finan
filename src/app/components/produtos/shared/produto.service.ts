import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment'
import { Produto } from './produto.model'

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private apiUrl = environment.apiUrl

  constructor(private http: HttpClient) { }

  pegarLista(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.apiUrl + 'produtos')
  }

  pegarPorId(id: number): Observable<Produto> {
    return this.http.get<Produto>(this.apiUrl + 'produtos/' + id)
  }

  cadastrarT(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(this.apiUrl + 'produtos', produto)
  }

  alterarT(produto: Produto): Observable<Produto> {
    return this.http.put<Produto>(this.apiUrl + 'produtos', produto)
  }

  excluirT(id: number): Observable<Produto> {
    return this.http.delete<Produto>(this.apiUrl + 'produtos/' + id)
  }
}
