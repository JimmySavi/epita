import { LibraryDTO } from './../shared-data/library';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {   map, filter, tap,catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  //Observable 
  getAllLibraries(): Observable<LibraryDTO[]>   {
    return  this.http.get<LibraryDTO[]>('http://localhost:8080/libraries');
  }


//Map observable
  // getAllLibraries(): Observable<Library[]>   {
  //   return  this.http.get<Library[]>('http://localhost:8080/libraries').pipe(map(
  //     libraries =>  libraries.map (library => {
  //       library.label ='scolo';
  //       return library;
  //     })
  //   )
  //   );
  // }


    //Filtres 
    // getAllLibraries(): Observable<Library[]>   {
    //   return  this.http.get<Library[]>('http://localhost:8080/libraries').pipe (
    //    filter((libraries) =>   libraries.length>10  
    //   ))
    // }
         

  /** POST: add a new library to the server */
addLibrary (library: LibraryDTO): Observable<string> {
  return this.http.post<string>("http://localhost:8080/libraries", library, this.httpOptions);
}   

  /** POST: update a library to the server */
  updateLibrary (library: LibraryDTO): Observable<LibraryDTO> {
    return this.http.put<LibraryDTO>("", library);
  }  

    

}

