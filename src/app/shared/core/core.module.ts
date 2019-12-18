import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { LocalLoaderModule } from '../local-loader/local-loader.module';
import { NgBootstrapConsolidationModule } from '../ng-bootstrap-consolidation/ng-bootstrap-consolidation.module';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        RouterModule,
        LocalLoaderModule,
        NgBootstrapConsolidationModule
    ],
    exports: [
        CommonModule,
        LocalLoaderModule,
        NgBootstrapConsolidationModule
    ],
    declarations: [],
    providers: [],
})
export class CoreModule { }
