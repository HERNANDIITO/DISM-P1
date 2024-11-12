import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Trabajo } from 'src/app/interfaces/trabajo';
import { TrabajoService } from 'src/app/services/trabajo.service';

@Component({
  selector: 'app-trabajo',
  templateUrl: './trabajo.component.html',
  styleUrls: ['./trabajo.component.scss'],
})
export class TrabajoComponent  implements OnInit {

  constructor( private trabajoService: TrabajoService ) { }

  ngOnInit() {
    this.trabajoNombre = this.trabajo?.Nombre ? this.trabajo.Nombre : ""
  }

  @Input() trabajo?: Trabajo;
  @Output() updateJobs = new EventEmitter<any>();  

  trabajoNombre: string = "";

  
  edit: boolean = true

  toggleEdit() {
    this.edit = !this.edit

    if ( !this.edit ) { return }

    const trabajoModify: Trabajo = {
      IdTrabajo: this.trabajo!.IdTrabajo,
      Nombre: this.trabajoNombre
    }

    this.trabajoService.modifyJob(trabajoModify).subscribe(data => {
      this.trabajo = data;
    })


  }

  deleteJob() {
    if ( !this.trabajo ) { return; }
    
    this.trabajoService.deleteJob(this.trabajo?.IdTrabajo).subscribe( data => {
      this.updateJobs.emit()
    })
  }
}
