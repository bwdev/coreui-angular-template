import { NgModule } from '@angular/core';

import { LocalLoaderComponent } from './local-loader.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [CommonModule],
    declarations: [LocalLoaderComponent],
    exports: [LocalLoaderComponent]
})
export class LocalLoaderModule { }
