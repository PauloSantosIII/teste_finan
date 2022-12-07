import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Empresa } from './empresa.model'

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {
  private apiUrl = ''  

  constructor(protected http: HttpClient) { }

  pegarLista(): Observable<Empresa[]> {
    return this.http.get<Empresa[]>(this.apiUrl)
  }

  pegarPorId(id: number): Observable<Empresa> {
    return this.http.get<Empresa>(this.apiUrl + '/' + id)
  }

  cadastrarEmpresa(empresa: Empresa): Observable<Empresa> {
    return this.http.post<Empresa>(this.apiUrl, empresa)
  }

  alterarEmpresa(empresa: Empresa): Observable<Empresa> {
    return this.http.put<Empresa>(this.apiUrl, empresa)
  }

  excluirrEmpresa(id: number): Observable<Empresa> {
    return this.http.delete<Empresa>(this.apiUrl + '/' + id)
  }
}
