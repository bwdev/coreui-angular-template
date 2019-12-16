import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { LocalLoaderModule } from '../local-loader/local-loader.module';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        RouterModule,
        LocalLoaderModule
    ],
    exports: [
        CommonModule,
        LocalLoaderModule
    ],
    declarations: [],
    providers: [],
})
export class CoreModule { }
