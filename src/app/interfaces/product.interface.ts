export interface Product {
  id: number;
  name: string;
  price: number;
}

export interface CartItem {
  product: Product;
  amount: number;
}

export interface Cart{
  cart: CartItem[]
}