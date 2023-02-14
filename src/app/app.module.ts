import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { AddBookComponent } from './add-book/add-book.component';
import { InLibraryComponent } from './in-library/in-library.component';
import { OutlibraryComponent } from './outlibrary/outlibrary.component';
import { SittingComponent } from './sitting/sitting.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import {NgToastModule} from 'ng-angular-popup';
import { HeaderComponent } from './header/header.component';






const routing : Routes = [
  {path:" ",component:HomeComponent },
  {path:"add",component: AddBookComponent },
  {path:"inlibrary",component:InLibraryComponent},
  {path:"outlibrary",component: OutlibraryComponent},
  {path:"sitting",component:SittingComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AddBookComponent,
    InLibraryComponent,
    OutlibraryComponent,
    SittingComponent,
    HomeComponent,
    HeaderComponent
  ],

  imports: [
    NgToastModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routing)
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
