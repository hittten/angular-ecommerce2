import {Component, OnInit, ViewChild} from '@angular/core';
import {PRODUCTS} from '../../mock-products';
import {NgForm} from '@angular/forms';
import {Product} from '../../product';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-product-template-form',
  templateUrl: './product-template-form.component.html',
  styleUrls: ['./product-template-form.component.scss']
})
export class ProductTemplateFormComponent implements OnInit {
  @ViewChild('productForm') productForm: NgForm;
  product: Product = {
    name: null,
    price: null,
    description: null,
    image: null,
  };

  constructor(private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
  }

  addProduct() {
    PRODUCTS.unshift({...this.product});
    this.snackBar.open(this.product.name + ', se ha agregado', 'cerrar', {
      duration: 3000,
    });
    this.productForm.resetForm({});
  }
}
