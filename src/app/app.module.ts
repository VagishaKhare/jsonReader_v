import { EditFormComponent } from './edit-form/edit-form.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';

const appRoutes: Routes = [
  {
    path: 'edit-form',
    component: EditFormComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    EditFormComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

