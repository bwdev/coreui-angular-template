import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomError404Component } from './custom-error404/custom-error404.component';
import { CustomError401Component } from './custom-error401/custom-error401.component';
import { CustomError500Component } from './custom-error500/custom-error500.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: '',
    data: {
      title: 'Pages'
    },
    children: [
      {
        path: '401',
        component: CustomError401Component,
        data: {
          title: '401'
        }
      },
      {
        path: '404',
        component: CustomError404Component,
        data: {
          title: '404'
        }
      },
      {
        path: '500',
        component: CustomError500Component,
        data: {
          title: '500'
        }
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
