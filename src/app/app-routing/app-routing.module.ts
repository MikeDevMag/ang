import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { TestComponent } from '../test/test.component';
import { Test2Component } from '../test2/test2.component';
import { StepsComponent } from '../steps/steps.component';
import { BootComponent } from '../boot/boot.component';
import { BooksComponent } from '../books/books.component';
import { BookComponent } from '../book/book.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
      path: 'steps',
      component: StepsComponent,
    },{
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
        component: BookComponent
    },
    {
        path: 'books',
        component: BooksComponent,
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }
