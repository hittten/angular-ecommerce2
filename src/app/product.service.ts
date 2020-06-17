import {Injectable} from '@angular/core';
import {environment} from '../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Product} from '../product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
  }

  list() {
    return this.http.get<Product[]>(environment.apiUrl + '/products/' + environment.user + '/');
  }

  add(product) {
    return this.http.post<Product>(environment.apiUrl + '/products/' + environment.user + '/', product);
  }
}
