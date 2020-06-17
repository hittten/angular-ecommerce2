import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {priceValidator} from '../../price-validator.directive';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ProductService} from '../product.service';

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

  sending = false;

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private productService: ProductService
  ) {
  }

  ngOnInit(): void {
  }

  addProduct() {
    if (!this.productForm.valid) {
      return;
    }
    this.sending = true;
    const product = {...this.productForm.value};
    this.productService.add(product)
      .subscribe({
        next: newProduct => {
          this.form.nativeElement.reset();
          this.snackBar.open(newProduct.name + ', se ha agregado', 'cerrar', {
            duration: 3000,
          });
        },
        complete: () => {
          this.sending = false;
        }
      });
  }
}
