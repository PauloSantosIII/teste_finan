import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment'
import { Compras } from './compras.model'

@Injectable({
  providedIn: 'root'
})
export class ComprasService {
  private apiUrl = environment.apiUrl

  constructor(private http: HttpClient) { }

  pegarLista(): Observable<Compras[]> {
    return this.http.get<Compras[]>(this.apiUrl + 'compras')
  }

  pegarPorId(id: number): Observable<Compras> {
    return this.http.get<Compras>(this.apiUrl + 'compras/' + id)
  }

  cadastrarT(compras: Compras): Observable<Compras> {
    return this.http.post<Compras>(this.apiUrl + 'compras', compras)
  }

  alterarT(compras: Compras): Observable<Compras> {
    return this.http.put<Compras>(this.apiUrl + 'compras', compras)
  }

  excluirT(id: number): Observable<Compras> {
    return this.http.delete<Compras>(this.apiUrl + 'compras/' + id)
  }
}
