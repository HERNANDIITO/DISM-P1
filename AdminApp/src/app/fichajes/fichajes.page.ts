import { Component } from '@angular/core';

@Component({
  selector: 'app-fichajes',
  templateUrl: 'fichajes.page.html',
  styleUrls: ['fichajes.page.scss']
})
export class FichajesPage {

  constructor() {}

  search(event: any) {
    console.log(event.detail.value);
  }
}
