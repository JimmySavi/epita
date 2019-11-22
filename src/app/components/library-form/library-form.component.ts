import { DirectorDTO } from './../../shared-data/director-dto';
import { LibraryDTO } from './../../shared-data/library';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AddressDTO } from 'src/app/shared-data/address-dto';
import { LibraryService } from 'src/app/services/library.service';
import { Router } from '@angular/router';
import { typesValidator } from 'src/app/directives/type.directive';

@Component({
  selector: 'app-library-form',
  templateUrl: './library-form.component.html',
  styleUrls: ['./library-form.component.scss']
})
export class LibraryFormComponent implements OnInit {

  // libraryForm = new FormGroup({
  //   label: new FormControl(''),
  //   type: new FormControl(''),
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  //   city: new FormControl(''),
  //   numberStreet: new FormControl(''),
  //   postalCode: new FormControl(''),
  //   street: new FormControl('')
  // });


  library: LibraryDTO ;

    libraryForm = new FormGroup({
    label: new FormControl('', [
          Validators.required,
          Validators.minLength(4)
    ]),
    type: new FormControl('', [
      typesValidator()
    ]),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    city: new FormControl(''),
    numberStreet: new FormControl(''),
    postalCode: new FormControl(''),
    street: new FormControl('')
  });

  
  constructor(private libraryService: LibraryService, private router: Router) { }

  ngOnInit() {
  }

  get label() { return this.libraryForm.get('label'); }

  get type() { return this.libraryForm.get('type'); }


  onSubmit() {
    console.warn(this.libraryForm.value);
    const  libraryDTO  = new LibraryDTO(0, this.libraryForm.value.label, this.libraryForm.value.type, 
      new AddressDTO( this.libraryForm.value.city,  this.libraryForm.value.numberStreet, 
         this.libraryForm.value.postalCode,  this.libraryForm.value.street),
      new DirectorDTO( this.libraryForm.value.firstName, this.libraryForm.value.lastName));

      console.log(libraryDTO);

    this.libraryService.addLibrary(libraryDTO).subscribe ((id) => {
        console.log('Succees' + id);
        this.router.navigate(['/liste']);
      },
      
      (error) => {
        console.log('Error' + error);
      });
  }

 
}
