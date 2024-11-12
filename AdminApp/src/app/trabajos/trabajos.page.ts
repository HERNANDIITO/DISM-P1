import { Component, OnInit } from '@angular/core';
import { NewTrabajo, Trabajo } from '../interfaces/trabajo';
import { TrabajoService } from '../services/trabajo.service';

@Component({
  selector: 'app-trabajos',
  templateUrl: 'trabajos.page.html',
  styleUrls: ['trabajos.page.scss']
})

export class TrabajosPage implements OnInit {

  trabajos?: Trabajo[];
  jobName: string = ""

  constructor(private trabajoService: TrabajoService) {}


  ngOnInit(): void {
    this.getTrabajos();
  }

  getTrabajos() {
    this.trabajoService.getTrabajos().subscribe(data => {
      this.trabajos = data;
    })
  }

  sendJob() {
    if ( this.jobName == "" ) { return }

    const newJob: NewTrabajo = {
      Nombre: this.jobName
    }

    this.trabajoService.addJob(newJob).subscribe( data => {
      this.getTrabajos();      
    })
  }
}
