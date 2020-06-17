import {createAction, props} from '@ngrx/store';
import {Product} from '../../product';

export const listLoading = createAction('[Products] listLoading');
export const listSuccess = createAction('[Products] listSuccess', props<{ products: Product[] }>());
export const adding = createAction('[Products] adding', props<{ product: Product }>());
export const addingSuccess = createAction('[Products] addingSuccess', props<{ product: Product }>());
