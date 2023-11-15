import { Injectable, inject } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as StoreActions from './store.actions';
import * as StoreFeature from './store.reducer';
import * as StoreSelectors from './store.selectors';

@Injectable()
export class StoreFacade {
  private readonly store = inject(Store);

  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(StoreSelectors.selectStoreLoaded));
  allStore$ = this.store.pipe(select(StoreSelectors.selectAllStore));
  selectedStore$ = this.store.pipe(select(StoreSelectors.selectEntity));

  markers$ = this.store.pipe(select(StoreSelectors.selectMarkers));

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(StoreActions.initStore());
  }
}
