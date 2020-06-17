import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {priceValidator} from '../../price-validator.directive';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Store} from '@ngrx/store';
import {AppState} from '../store';
import {adding, addingSuccess} from '../store/form.actions';
import {Observable, Subscription} from 'rxjs';
import {Actions, ofType} from '@ngrx/effects';

@Component({
  selector: 'app-product-react-form',
  templateUrl: './product-react-form.component.html',
  styleUrls: ['./product-react-form.component.scss']
})
export class ProductReactFormComponent implements OnInit, OnDestroy {
  @ViewChild('form') form: ElementRef<HTMLFormElement>;
  productForm = this.fb.group({
    name: [null, Validators.required],
    price: [null, [Validators.required, priceValidator()]],
    description: [null, [Validators.required, Validators.minLength(10), Validators.maxLength(300)]],
    image: [null, [Validators.required, Validators.pattern(/^https:\/\/[a-z-_./]/i)]],
  });

  sending$: Observable<boolean>;
  private subscriptions = new Subscription();

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private store: Store<AppState>,
    private actions$: Actions,
  ) {
    this.sending$ = this.store.select('form', 'sending');
    const subs = this.actions$.pipe(ofType(addingSuccess))
      .subscribe(action => {
        this.form.nativeElement.reset();
        this.snackBar.open(action.product.name + ', se ha agregado', 'cerrar', {
          duration: 3000,
        });
      });

    this.subscriptions.add(subs);
  }

  ngOnInit(): void {
  }

  addProduct() {
    if (!this.productForm.valid) {
      return;
    }
    const product = {...this.productForm.value};

    this.store.dispatch(adding({product}));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
