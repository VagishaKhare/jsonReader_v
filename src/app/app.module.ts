
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { EditFormComponent } from './edit-form/edit-form.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRouting } from './app-routing.module';
import { JsonReaderComponent } from './json-reader component/json-reader.component';
@NgModule({
  declarations: [
    AppComponent,
    JsonReaderComponent,
    EditFormComponent
  ],
  imports: [
    BrowserModule,
    AppRouting,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

