import {createReducer, on} from '@ngrx/store';
import {adding, addingSuccess, listLoading, listSuccess} from './product.actions';
import {Product} from '../../product';

export interface ProductState {
  items: Product[];
  loading: boolean;
  adding: boolean;
}

const initialState: ProductState = {
  items: [],
  loading: false,
  adding: false,
};

const product = createReducer(initialState,
  on(listLoading, state => ({...state, loading: true})),
  on(listSuccess, (state, action) => ({...state, loading: false, items: action.products})),
  on(adding, state => ({...state, adding: true})),
  on(addingSuccess, state => ({...state, adding: false})),
);

export function productReducer(state, action) {
  return product(state, action);
}

