import { LocalLoaderComponent } from './local-loader.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestStore } from 'src/app/store/test-store';
import { Store } from '@ngrx/store';

describe('local-loader', () => {
    let component: LocalLoaderComponent;
    let fixture: ComponentFixture<LocalLoaderComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [{ provide: Store, useClass: TestStore }],
            declarations: [LocalLoaderComponent],
        });

        fixture = TestBed.createComponent(LocalLoaderComponent);
        component = fixture.componentInstance;
    });

    it('should have notch as default icon', () => {
        const el: HTMLElement = fixture.nativeElement;
        const i = el.querySelector('i');

        fixture.detectChanges();

        expect(i.className).toBe('fa fa-circle-o-notch fa-spin fa-2x');
    });

    it('should change the icon with input', () => {
        const el: HTMLElement = fixture.nativeElement;
        const i = el.querySelector('i');
        fixture.componentInstance.loaderIcon = 'cog';

        fixture.detectChanges();

        expect(i).toBeDefined();
        expect(i.className).toBe('fa fa-cog fa-spin fa-2x');
    });
});
