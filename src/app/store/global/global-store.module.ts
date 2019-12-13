import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { featureReducer } from './reducer';
import { GlobalEffects } from './effects';

@NgModule({
    imports: [
        StoreModule.forRoot({ globalState: featureReducer }),
        EffectsModule.forRoot([GlobalEffects])
        // import any other feature modules here
    ]
})
export class GlobalStoreModule { }
