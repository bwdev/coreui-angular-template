import { NgModule } from '@angular/core';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { SimpleModalComponent } from './simple-modal/simple-modal.component';

const NGBMODULES = [
    NgbModalModule
];

@NgModule({
    imports: [NGBMODULES],
    declarations: [SimpleModalComponent],
    exports: [SimpleModalComponent]
})
export class NgBootstrapConsolidationModule { }
