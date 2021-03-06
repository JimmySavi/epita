import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibraryComponent } from './components/library/library.component';
import { DisplayDataComponent } from './components/display-data/display-data.component';
import { FormsModule } from '@angular/forms';
import { ListLibrariesComponent } from './components/list-libraries/list-libraries.component';
import { LibraryFormComponent } from './components/library-form/library-form.component';


@NgModule({
  declarations: [
    AppComponent,
    LibraryComponent,
    DisplayDataComponent,
    ListLibrariesComponent,
    LibraryFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


