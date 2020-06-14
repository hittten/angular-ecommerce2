import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductReactFormComponent} from './product-react-form/product-react-form.component';
import {ProductAddComponent} from './product-add/product-add.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ProductTemplateFormComponent} from './product-template-form/product-template-form.component';
import {PriceValidatorDirective} from '../app-price-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductListComponent,
    ProductReactFormComponent,
    ProductAddComponent,
    ProductTemplateFormComponent,
    PriceValidatorDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
