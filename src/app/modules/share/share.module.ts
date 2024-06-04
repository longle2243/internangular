import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowerrorComponent } from './showerror/showerror.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { CarticonComponent } from './carticon/carticon.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CartComponent } from './cart/cart.component';
import { ProductRxjsComponent } from './product-rxjs/product-rxjs.component';
import { FormsModule } from '@angular/forms';
import { ProductAddComponent } from './product-add/product-add.component';
import { CartrxjsComponent } from './cartrxjs/cartrxjs.component';

@NgModule({
  declarations: [
    ShowerrorComponent,
    ProductdetailComponent,
    CarticonComponent,
    CartComponent,
    ProductRxjsComponent,
    ProductAddComponent,
    CartrxjsComponent,
  ],
  imports: [CommonModule, FontAwesomeModule, FormsModule],
  exports: [
    ShowerrorComponent,
    ProductdetailComponent,
    CarticonComponent,
    CartComponent,
    ProductRxjsComponent,
  ],
})
export class ShareModule {}
