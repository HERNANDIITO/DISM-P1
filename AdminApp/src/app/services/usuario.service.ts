import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewUsuario, Usuario } from '../interfaces/usuario';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  apiRest = 'http://localhost:8080';
  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get<Usuario[]>(`${this.apiRest}/getUsers`)
    .pipe(map(res => res));
  }

  modifyUser(user: Usuario) {
    return this.http.put<Usuario>(`${this.apiRest}/user`, user)
    .pipe(map(res => res))
  }

  postUser(user: NewUsuario) {
    return this.http.post<Usuario>(`${this.apiRest}/user`, user)
    .pipe(map(res => res))
  }

  deleteUser(userID: number) {
    return this.http.delete<any>(`${this.apiRest}/user?userID=${userID}`)
    .pipe(map(res => res))
  }

}
