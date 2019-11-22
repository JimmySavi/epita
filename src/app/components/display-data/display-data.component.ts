import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.scss']
})
export class DisplayDataComponent implements OnInit {

  libraries : string[] = ['Bibliothèque François Mitterand',
                          'Alcazar',
                          'Bibilothèque Nationale de France'];

                          
  
  isDisabled  = false;

  clickMessage = '';

  values = '';

  name = '';

  constructor() { }

  ngOnInit() {
  }

  change() {
   this.isDisabled = !this.isDisabled;
  }

  onClickMe() {
    this.clickMessage = 'Bonjour la promo';
  }

  onKey(event: any) { // without type info
    this.values += event.target.value + ' | ';
  }
}
