import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HighlightPipe } from './shared/highlight.pipe';
import { AmpersandEncodePipe } from './shared/ampersand-encode.pipe';

import { HighlightslicePipe } from './highlightslice.pipe';
import { FilePathPipe } from './file-path.pipe';
import { FilePath2Pipe } from './file-path2.pipe';
import { HomesearchComponent } from './homesearch/homesearch.component';
import { PagesComponent } from './pages/pages.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactsdetailComponent } from './contactsdetail/contactsdetail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HighlightPipe,
    AmpersandEncodePipe,
    HighlightslicePipe,
    FilePathPipe,
    FilePath2Pipe,
    HomesearchComponent,
    PagesComponent,
    ContactsComponent,
    ContactsdetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



