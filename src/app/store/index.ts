import {productReducer, ProductState} from './product.reducer';
import {formReducer, FormState} from './form.reducer';

export interface AppState {
  product: ProductState;
  form: FormState;
}

export const reducers = {product: productReducer, form: formReducer};
