import { LibraryDTO } from './../../shared-data/library';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {

  @Input()
  library: LibraryDTO;

  @Output() labelEmitter = new EventEmitter<string>();
  
  sendLabel(label) {
    this.labelEmitter.emit(label);
  }


  constructor() { }

  ngOnInit() {
  }


}

