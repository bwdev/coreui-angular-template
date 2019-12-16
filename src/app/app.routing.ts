import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers/default-layout';
import { CustomError401Component } from './views/pages/custom-error401/custom-error401.component';
import { CustomError404Component } from './views/pages/custom-error404/custom-error404.component';
import { CustomError500Component } from './views/pages/custom-error500/custom-error500.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '401',
    component: CustomError401Component
  },
  {
    path: '404',
    component: CustomError404Component
  },
  {
    path: '500',
    component: CustomError500Component
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: './views/dashboard/dashboard.module#DashboardModule'
      }
    ]
  },
  { path: '**', component: CustomError404Component }
];

export { routes };

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
