import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {ProductService} from '../product.service';
import {adding, addingSuccess, listLoading, listSuccess} from './product.actions';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {EMPTY} from 'rxjs';

@Injectable()
export class ProductEffects {
  loadProducts$ = createEffect(() => this.actions$.pipe(
    ofType(listLoading),
    mergeMap(() => this.productService.list()
      .pipe(
        map(products => listSuccess({products})),
        catchError(() => EMPTY)
      ))
    )
  );

  addingProduct$ = createEffect(() => this.actions$.pipe(
    ofType(adding),
    mergeMap(action => this.productService.add(action.product)
      .pipe(
        map(product => addingSuccess({product})),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private productService: ProductService,
  ) {
  }
}
