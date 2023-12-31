import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromStore from './+state/store.reducer';
import { StoreEffects } from './+state/store.effects';
import { StoreFacade } from './+state/store.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromStore.STORE_FEATURE_KEY, fromStore.storeReducer),
    EffectsModule.forFeature([StoreEffects]),
  ],
  providers: [StoreFacade],
})
export class DataAccessModule {}
