import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export enum LoaderIcons {
    notch = 'fa fa-circle-o-notch fa-spin fa-2x',
    cog = 'fa fa-cog fa-spin fa-2x',
    gear = 'fa fa-gear fa-spin fa-2x',
    refresh = 'fa fa-refresh fa-spin fa-2x',
    spinner = 'fa fa-spinner fa-spin fa-2x'
}

@Component({
    selector: 'app-local-loader',
    templateUrl: 'local-loader.component.html'
})
export class LocalLoaderComponent implements OnInit {
    @Input() loadingState = false;
    @Input() loaderIcon;

    @Output() stateChange = new EventEmitter<boolean>();

    get icon(): string {
        switch (this.loaderIcon) {
            case 'cog': return 'fa fa-cog fa-spin fa-2x';
            case 'gear': return 'fa fa-gear fa-spin fa-2x';
            case 'refresh': return 'fa fa-refresh fa-spin fa-2x';
            case 'spinner': return 'fa fa-spinner fa-spin fa-2x';
            default: return 'fa fa-circle-o-notch fa-spin fa-2x';
        }
    }

    constructor() { }

    ngOnInit() { }

    onStateChange(stateChange: boolean) {
        this.stateChange.emit(stateChange);
    }
}
