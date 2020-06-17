import {createAction, props} from '@ngrx/store';
import {Product} from '../../product';

export const adding = createAction('[Product Form] adding', props<{ product: Product }>());
export const addingSuccess = createAction('[Product Form] addingSuccess', props<{ product: Product }>());
