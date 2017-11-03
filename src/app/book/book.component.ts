import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';

import { Router } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { Book } from '../shared/book';
import { BookService } from '../shared/book.service';

import { BookResolverServiceService } from '../shared/book-resolver-service.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

    constructor(private route: ActivatedRoute,
        private location: Location,
       // private bookService: BookService
    ) { }

    idDisplay: string;
    book: Book;
    ngOnInit() {

        // Watch for changes to the resolve data
        this.route.data.subscribe(data => {
            this.onBookRetrieved(data['book']);
          }
        );
  }

    onBookRetrieved(book: Book): void {
        var test = book;
        this.book = book;
    }
}
