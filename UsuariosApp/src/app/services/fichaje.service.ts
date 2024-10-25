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

  updateFichaje(fichaje: Fichaje) {
    return this.http.put<Fichaje>(`${this.apiRest}` + `fichajes`, fichaje)
    .pipe(map(res => res));
  }

  empezarFichaje( fichaje: NewFichaje ) {
    return this.http.post<Fichaje>( `${this.apiRest}` + 'fichajes', fichaje )
    .pipe(map( res => res ));
  }
  

}
