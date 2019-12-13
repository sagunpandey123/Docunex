import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { AppComponent } from './app.component';
import { HomesearchComponent } from './homesearch/homesearch.component';
import { PagesComponent } from './pages/pages.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactsdetailComponent } from './contactsdetail/contactsdetail.component';

const routes: Routes = [
  { path: '', redirectTo: '/homesearch', pathMatch: 'full' },
  { path: 'homesearch', component: HomesearchComponent },
  { path: 'pages', component: PagesComponent },
  { path: 'contactsdetail', component: ContactsdetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
