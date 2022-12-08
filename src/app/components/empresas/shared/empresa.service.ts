import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Empresa } from './empresa.model'
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {
  private apiUrl = environment.apiUrl

  constructor(private http: HttpClient) { }

  pegarLista(): Observable<Empresa[]> {
    return this.http.get<Empresa[]>(this.apiUrl + 'empresas')
  }

  pegarPorId(id: number): Observable<Empresa> {
    return this.http.get<Empresa>(this.apiUrl + 'empresas/' + id)
  }

  cadastrarT(empresa: Empresa): Observable<Empresa> {
    return this.http.post<Empresa>(this.apiUrl + 'empresas', empresa)
  }

  alterarT(empresa: Empresa): Observable<Empresa> {
    return this.http.put<Empresa>(this.apiUrl + 'empresas', empresa)
  }

  excluirT(id: number): Observable<Empresa> {
    return this.http.delete<Empresa>(this.apiUrl + 'empresas/' + id)
  }
}
