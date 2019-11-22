import { LibraryService } from './../../services/library.service';
import { AddressDTO } from './../../shared-data/address-dto';
import { LibraryDTO } from './../../shared-data/library';
import { Component, OnInit } from '@angular/core';
import { DirectorDTO } from 'src/app/shared-data/director-dto';

@Component({
  selector: 'app-list-libraries',
  templateUrl: './list-libraries.component.html',
  styleUrls: ['./list-libraries.component.scss']
})
export class ListLibrariesComponent implements OnInit {

  constructor(private libraryService: LibraryService) { }

  messageEventEmitter: string;

  libraries: LibraryDTO[];

/*   libraries: Library[] = [
    { id: 0,
      label : 'Bibliothèque François Mitterand',
      type : 'NATIONAL',
      addressDTO : {
        city: 'PARIS',
        numberStreet: 11,
        postalCode: 75013,
        street: 'François Mauriac'
      },
      directorDTO:{
        firstname: 'Sylviane',
        lastname: 'Tarsot-Gillery'
      }
    },
    { id: 1,
      label : 'Bibliothèque l\'Alcazar',
      type : 'PUBLIC',
      addressDTO : {
        city: 'MARSEILLE',
        numberStreet: 58,
        postalCode: 13001,
        street: 'Cours Belsunce'
      },
      directorDTO:{
        firstname: 'Etienne',
        lastname: 'DEMOLINS'
      }
    },
    new Library(2, 'Bibliothèque Parmentier', 'PUBLIC',
    new AddressDTO('PARIS', 20, 75011, 'Avenue Parmentier'),
    new DirectorDTO('Emmanuel', 'cuffini'))
  ]; */
 
  //constructor() { }



  ngOnInit() {
    this.libraryService.getAllLibraries().subscribe((libraries) => {
      this.libraries = libraries;
    
    });
  }



  onLabelEmiter(label) {
    this.messageEventEmitter = 'Vous avez cliqué sur la ' + label;
  }
}



