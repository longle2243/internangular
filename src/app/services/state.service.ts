import { Injectable } from '@angular/core';
import { Product } from '@app/interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  private storageKey = 'products';

  constructor() {}

  // get data from LocalStorage
  getProducts(): Product[] {
    const products = localStorage.getItem(this.storageKey);
    return products ? JSON.parse(products) : [];
  }

  // Save data LocalStorage
  saveProducts(products: Product[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(products));
  }

  addProduct(product: Product): void {
    const products = this.getProducts();
    products.push(product);
    this.saveProducts(products);
  }

  removeProduct(productId: number): void {
    const products = this.getProducts().filter(
      product => product.id !== productId
    );
    this.saveProducts(products);
  }

  updateProduct(updatedProduct: Product): void {
    const products = this.getProducts().map(product =>
      product.id === updatedProduct.id ? updatedProduct : product
    );
    this.saveProducts(products);
  }
}
