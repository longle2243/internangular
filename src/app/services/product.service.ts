import { Injectable } from '@angular/core';
import { Product } from '@app/interfaces/product.interface';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productsSubject: BehaviorSubject<Product[]> = new BehaviorSubject<
    Product[]
  >([]);
  public products$: Observable<Product[]> = this.productsSubject.asObservable();

  constructor() {}

  addProduct(product: Product): void {
    const currentProducts = this.productsSubject.value;
    this.productsSubject.next([...currentProducts, product]);
  }

  removeProduct(productId: number): void {
    const currentProducts = this.productsSubject.value.filter(
      product => product.id !== productId
    );
    this.productsSubject.next(currentProducts);
  }

  updateProduct(updatedProduct: Product): void {
    const currentProducts = this.productsSubject.value.map(product =>
      product.id === updatedProduct.id ? updatedProduct : product
    );
    this.productsSubject.next(currentProducts);
  }

  getProducts(): Observable<Product[]> {
    return this.products$;
  }
}
