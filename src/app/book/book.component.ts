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
import { ApiResponse } from '../shared/apiResponse';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

    constructor(private route: ActivatedRoute,
        private location: Location, private bookService: BookService) { }

    idDisplay: string;
    book: Book;

  ngOnInit() {

      this.route.paramMap
          .switchMap((params: ParamMap) => {
              this.idDisplay = params.get('id');
              var ret = this.bookService.getBook(+this.idDisplay);
              return ret;
           //   return null;
            //  return this.inviteService.getInvitee(this.secureLinkId);
          })
          .subscribe(
          (invite) => {
              this.book = invite;
          },
          errors => {
              var test = errors;
          });
  }

}
