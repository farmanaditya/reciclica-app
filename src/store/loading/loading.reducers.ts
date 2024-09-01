import { createReducer, on } from '@ngrx/store';
import { show, hide } from './loading.actions';
import { LoadingState } from './LoadingState';

const initialState = {}; // Define the initialState variable

const reducer = createReducer(initialState, // Use the initialState variable
  on(show, () => {
    return {show: true};
  }),
  on(hide, () => {
    return {show: false};
  })
);

import { Action } from '@ngrx/store';

export function loadingReducer(state: Action, action: any) {
  return reducer(state, action);
}

