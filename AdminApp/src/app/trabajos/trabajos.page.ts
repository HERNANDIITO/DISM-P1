import { Component } from '@angular/core';

@Component({
  selector: 'app-trabajos',
  templateUrl: 'trabajos.page.html',
  styleUrls: ['trabajos.page.scss']
})
export class TrabajosPage {

  constructor() {}

  edit = true

  toggleEdit() {
    this.edit = !this.edit

    if ( this.edit ) {
      console.log("Editar trabajo");
      
    }
  }
}
