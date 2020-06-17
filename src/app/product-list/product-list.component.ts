import {Component, OnInit} from '@angular/core';
import {Store, select} from '@ngrx/store';
import {Observable} from 'rxjs';
import {ProductState} from '../store/product.reducer';
import * as productActions from '../store/product.actions';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  productStore$: Observable<ProductState>;

  constructor(
    private store: Store<{ product: ProductState }>
  ) {
    this.productStore$ = store.pipe(select('product'));
    this.store.dispatch(productActions.listLoading());
  }

  ngOnInit(): void {
  }

}
