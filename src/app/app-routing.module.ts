import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductAddComponent} from './product-add/product-add.component';

const routes: Routes = [
  {path: 'products/add', component: ProductAddComponent},
  {path: 'products', component: ProductListComponent},
  {path: '', redirectTo: 'products', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
