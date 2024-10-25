import { Injectable } from '@angular/core';
import { Trabajo } from '../interfaces/trabajo';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrabajoService {


  apiRest = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  getTrabajos() {
		return this.http.get<Trabajo[]>(`${this.apiRest}` + `getWorks`)
			.pipe(map(res => res));
	}
}
