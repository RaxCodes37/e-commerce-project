export interface Product {
  productId: string;
  productName: string;
  productDesc: string;
  productPrice: string;
}

export interface ProductOnCart {
  cartId: string
  productId: string;
  productName: string;
  productDesc: string;
  productPrice: string;
  productCount: number;
}
