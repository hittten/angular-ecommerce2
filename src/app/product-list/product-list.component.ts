import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {AppState} from '../store';
import {Observable} from 'rxjs';
import {ProductState} from '../store/product.reducer';
import {listLoading} from '../store/product.actions';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  productStore$: Observable<ProductState>;

  constructor(private store: Store<AppState>) {
    this.productStore$ = this.store.pipe(select('product'));
    this.store.dispatch(listLoading());
  }

  ngOnInit(): void {
  }

}
