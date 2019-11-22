import { ListLibrariesComponent } from './components/list-libraries/list-libraries.component';
import { LibraryFormComponent } from './components/library-form/library-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  { path: 'liste', component: ListLibrariesComponent },
  { path: 'nouveau', component: LibraryFormComponent },
  { path: '', redirectTo: '/liste', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


