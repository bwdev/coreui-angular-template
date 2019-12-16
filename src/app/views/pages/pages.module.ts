import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomError401Component } from './custom-error401/custom-error401.component';
import { CustomError404Component } from './custom-error404/custom-error404.component';
import { CustomError500Component } from './custom-error500/custom-error500.component';
import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule
  ],
  declarations: [CustomError401Component, CustomError404Component, CustomError500Component]
})
export class PagesModule { }
