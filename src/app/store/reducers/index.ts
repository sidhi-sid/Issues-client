import { ActionReducerMap } from '@ngrx/store';
import { State, issuesReducer } from '../reducers/issues.reducer';

export interface AppState {
  issue: State;
}

export const appReducer: ActionReducerMap<AppState, any> = {
  issue: issuesReducer,
};
