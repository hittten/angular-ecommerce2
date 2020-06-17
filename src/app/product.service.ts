import { Injectable } from '@angular/core';
import {PRODUCTS} from '../mock-products';
import {of} from 'rxjs';
import {delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  list() {
    return of([...PRODUCTS]).pipe(delay(1000));
  }

  add(product) {
    PRODUCTS.unshift(product);
    return of(product).pipe(delay(1000));
  }
}
