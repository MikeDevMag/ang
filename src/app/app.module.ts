import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { StepsComponent } from './steps/steps.component';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';
import { BootComponent } from './boot/boot.component';
import { HomeComponent } from './home/home.component';
import { BooksComponent } from './books/books.component';
import { BookService } from './shared/book.service';
import { BookComponent } from './book/book.component';

import { BookResolverServiceService } from './shared/book-resolver-service.service';
import { BooksResolverServiceService } from './shared/books-resolver-service.service';

@NgModule({
  declarations: [
    AppComponent,
    StepsComponent,
    TestComponent,
    Test2Component,
    BootComponent,
    HomeComponent,
    BooksComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [BookService, BookResolverServiceService, BooksResolverServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
