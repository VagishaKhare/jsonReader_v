import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EditFormComponent } from './edit-form/edit-form.component';
import { JsonReaderComponent } from './json-reader component/json-reader.component';

const routes: Routes = [
  { path: '', component: JsonReaderComponent },
  { path: 'edit-form/:name/:weight/:availability', component: EditFormComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouting { }
