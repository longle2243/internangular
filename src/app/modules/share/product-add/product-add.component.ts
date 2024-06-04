import { Component } from '@angular/core';
import { Product } from '@app/interfaces/product.interface';
import { StateService } from '@app/services/state.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.scss',
})
export class ProductAddComponent {
  name: string = '';
  price: number = 0;

  constructor(private stateService: StateService) {}

  addProduct(): void {
    const newProduct: Product = {
      id: Date.now(),
      name: this.name,
      price: this.price,
    };
    this.stateService.addProduct(newProduct);
    this.name = '';
    this.price = 0;
  }
}
