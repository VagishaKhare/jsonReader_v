import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { EditFormComponent } from './edit-form/edit-form.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRouting } from './app-routing.module';
import { JsonReaderComponent } from './json-reader component/json-reader.component';
import {ListFilterPipe} from './json-reader component/list-filter.pipe';
@NgModule({
  declarations: [
    AppComponent,
    JsonReaderComponent,
    EditFormComponent,
    ListFilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRouting,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

