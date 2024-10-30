import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Fichaje, NewFichaje } from '../interfaces/fichaje';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FichajeService {
  apiRest = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  getLastFichaje(id: number) {
		return this.http.get<Fichaje>(`${this.apiRest}` + `getLastUsuFichaje?userID=${id}`)
			.pipe(map(res => res));
	}

  getUserFichajes(id: number) {
		return this.http.get<Fichaje[]>(`${this.apiRest}` + `getUserFichajes?userID=${id}`)
			.pipe(map(res => res));
	}

  updateFichaje(fichaje: Fichaje) {
    return this.http.put<Fichaje>(`${this.apiRest}` + `fichajes`, fichaje)
    .pipe(map(res => res));
  }

  empezarFichaje( fichaje: NewFichaje ) {
    return this.http.post<Fichaje>( `${this.apiRest}` + 'fichajes', fichaje )
    .pipe(map( res => res ));
  }

  cerrarFichaje( fichaje: Fichaje ) {
    if (!fichaje) { return }

    fichaje.FechaHoraSalida = new Date().toString();

    fichaje.IdFichaje = fichaje.IdFichaje.toString()
    fichaje.IdTrabajo = fichaje.IdTrabajo.toString()
    fichaje.IdUsuario = fichaje.IdUsuario.toString()
    

    this.updateFichaje(fichaje).subscribe()
  }

  formatDate(date: Date) {
    if ( Number.isNaN(date.getDay()) ) { return "Sin completar" }
    
    const dateFormat = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} | ${date.getHours()}:${date.getMinutes().toString().length <= 1 ? date.getMinutes().toString()+'0' : date.getMinutes()}`;
    
    return dateFormat
  }
  

}
