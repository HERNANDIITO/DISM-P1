import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro-component',
  templateUrl: './registro.component.html',
  styleUrls: [
    './registro.component.scss',
    '../consulta.page.scss'
  ],
})
export class RegistroComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  @Input() job?: string;
  @Input() location?: string;
  @Input() inHour?: string;
  @Input() outHour?: string;

}
