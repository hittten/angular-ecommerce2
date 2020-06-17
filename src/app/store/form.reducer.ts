import {createReducer, on} from '@ngrx/store';
import {adding, addingSuccess} from './form.actions';

export interface FormState {
  sending: boolean;
}

const initialState: FormState = {
  sending: false,
};

const form = createReducer(initialState,
  on(adding, state => ({...state, sending: true})),
  on(addingSuccess, state => ({...state, sending: false})),
);

export function formReducer(state, action) {
  return form(state, action);
}
