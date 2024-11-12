import { Injectable } from '@angular/core';
import { NewTrabajo, Trabajo } from '../interfaces/trabajo';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrabajoService {


  apiRest = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getTrabajos() {
		return this.http.get<Trabajo[]>(`${this.apiRest}/getWorks`)
			.pipe(map(res => res));
  }
    
  getTrabajoByID(id: string) {
		return this.http.get<Trabajo>(`${this.apiRest}/work?workID=${id}`)
			.pipe(map(res => res));
  }

  modifyJob(job: Trabajo) {
    return this.http.put<Trabajo>(`${this.apiRest}/work`, job)
      .pipe(map(res => res));
  }

  deleteJob(id: number) {
    return this.http.delete<Trabajo>(`${this.apiRest}/work?workID=${id}`)
      .pipe(map(res => res));
  }

  addJob(newJob: NewTrabajo) {
    return this.http.post<Trabajo>(`${this.apiRest}/work`, newJob)
      .pipe(map(res => res));
  }
}
