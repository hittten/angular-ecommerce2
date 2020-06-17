import {productReducer, ProductState} from './product.reducer';
import {formReducer, FormState} from './form.reducer';
import {routerReducer, RouterState} from '@ngrx/router-store';

export interface AppState {
  product: ProductState;
  form: FormState;
  router: RouterState;
}

export const reducers = {product: productReducer, form: formReducer, router: routerReducer};
