import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {EMPTY} from 'rxjs';
import {ProductService} from '../product.service';
import {adding, addingSuccess} from './form.actions';

@Injectable()
export class FormEffects {
  addingProduct$ = createEffect(() => this.actions$.pipe(
    ofType(adding),
    mergeMap(action => this.productService.add(action.product)
      .pipe(
        map(product => (addingSuccess({product}))),
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
