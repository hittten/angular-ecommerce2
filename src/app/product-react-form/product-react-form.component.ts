import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {priceValidator} from '../../price-validator.directive';
import {PRODUCTS} from '../../mock-products';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-product-react-form',
  templateUrl: './product-react-form.component.html',
  styleUrls: ['./product-react-form.component.scss']
})
export class ProductReactFormComponent implements OnInit {
  @ViewChild('form') form: ElementRef<HTMLFormElement>;
  productForm = this.fb.group({
    name: [null, Validators.required],
    price: [null, [Validators.required, priceValidator()]],
    description: [null, [Validators.required, Validators.minLength(10), Validators.maxLength(300)]],
    image: [null, [Validators.required, Validators.pattern(/^https:\/\/[a-z-_./]/i)]],
  });

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
  }

  addProduct() {
    if (!this.productForm.valid) {
      return;
    }
    const newProduct = {...this.productForm.value};
    PRODUCTS.unshift(newProduct);

    this.form.nativeElement.reset();
    this.snackBar.open(newProduct.name + ', se ha agregado', 'cerrar', {
      duration: 3000,
    });
  }
}
