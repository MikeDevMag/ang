import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from '../home/home.component';
import { TestComponent } from '../test/test.component';
import { Test2Component } from '../test2/test2.component';
import { TabsComponent } from '../tabs/tabs.component';

import { StepsComponent } from '../steps/steps.component';
import { BootComponent } from '../boot/boot.component';
import { BooksComponent } from '../books/books.component';
import { BookComponent } from '../book/book.component';
import { NamesListComponent } from '../names-list/names-list.component';

import { BookResolverServiceService } from '../shared/book-resolver-service.service';
import { BooksResolverServiceService } from '../shared/books-resolver-service.service';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'tabs',
        component: TabsComponent,
    },
    {
      path: 'steps',
      component: StepsComponent,
    },
    {
    path: 'test',
    component: TestComponent,
    }, {
        path: 'test2',
        component: Test2Component,
    }, {
        path: 'boot',
        component: BootComponent,
    },
    {
        path: 'books/:id',
        component: BookComponent,
        resolve: { book: BookResolverServiceService }
    },
    //{
    //    path: 'books',
    //    component: BooksComponent,
    //}
    {
        path: 'books',
        component: BooksComponent,
        resolve: { books: BooksResolverServiceService }
    }, {
        path: 'names',
        component: NamesListComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes
        //,{ enableTracing: true }
    )],
    exports: [RouterModule]
})
export class AppRoutingModule { }
