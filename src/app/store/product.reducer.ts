import {Product} from '../../product';
import {createReducer, on} from '@ngrx/store';
import {listLoading, listSuccess} from './product.actions';

export interface ProductState {
  items: Product[];
  loading: boolean;
}

const initialState: ProductState = {
  items: [],
  loading: false,
};

const product = createReducer(initialState,
  on(listLoading, state => ({...state, loading: true})),
  on(listSuccess, (state, action) => ({...state, loading: false, items: action.products})),
);

export function productReducer(state, action) {
  return product(state, action);
}
