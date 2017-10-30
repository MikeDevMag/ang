import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent} from '../test/test.component';
import { StepsComponent } from '../steps/steps.component';

const routes: Routes = [
    {
        path: '',
        component: TestComponent,
    },
    {
      path: 'steps',
      component: StepsComponent,
    },{
    path: 'test',
    component: TestComponent,
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
