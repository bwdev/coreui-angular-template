import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [CommonModule, HttpClientModule, RouterModule],
    exports: [CommonModule],
    declarations: [],
    providers: [],
})
export class CoreModule { }
