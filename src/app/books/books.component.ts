import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';
import { BookService } from '../shared/book.service';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

    books: Book[];
    errorMessage: string;
    constructor(private bookService: BookService) { }

  ngOnInit(): void {
      //this.listFilter = this.route.snapshot.queryParams['filterBy'] || '';
      //this.showImage = (this.route.snapshot.queryParams['showImage'] === 'true');
      //// console.log(this.route.snapshot.queryParamMap.get('filterBy'));            

      this.bookService.getBooks()
          .subscribe(
          (books) => {
              var test = books;
             // var test2 = JSON.parse(books.toString());
              if ("error" in books) {
                  //domain validation error
                  //route to error tab
                  //this.invite = invite;
                  //this.tabNavigate("tab-9");
              }
              else {
                  var test = books;
                  this.books = books;
                  //seed values
                 // this.invite.payrollFrequency = '';
              }
          },
          errors => {
              var test = errors;
              //this.tabNavigate("tab-9");
              //this.handleErrors(errors)
          });
          //.subscribe(books => this.books = books,
          //error => this.errorMessage = <any>error);
  }

  myFunction() {
      // Declare variables
      var input, filter, ul, li, a, i;
      input = document.getElementById('myInput');
      filter = input.value.toUpperCase();
      ul = document.getElementById("myUL");
      li = ul.getElementsByTagName('li');

      // Loop through all list items, and hide those who don't match the search query
      for (i = 0; i < li.length; i++) {
          a = li[i].getElementsByTagName("a")[0];
          if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
              li[i].style.display = "";
          } else {
              li[i].style.display = "none";
          }
      }
  }
}
