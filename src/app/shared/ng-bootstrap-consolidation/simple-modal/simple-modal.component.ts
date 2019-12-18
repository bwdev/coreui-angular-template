import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbModal, NgbModalOptions, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'ngb-simple-modal',
    templateUrl: 'simple-modal.component.html'
})

export class SimpleModalComponent implements OnInit {
    modalOptionsDefault: NgbModalOptions = {
        ariaLabelledBy: '',
        backdrop: true,
        backdropClass: '',
        beforeDismiss: () => {
            this.dismissModal.emit();
            return true;
        },
        centered: true,
        container: 'body',
        keyboard: true,
        scrollable: true,
        size: 'sm',
        windowClass: ''
    };

    @Input() title: string;
    @Output() dismissModal: EventEmitter<any> = new EventEmitter<any>();

    modal: NgbModalRef;

    constructor(private modalService: NgbModal) { }

    ngOnInit() { }

    open(content) {
        this.modal = this.modalService.open(content, this.modalOptionsDefault);
    }
}
