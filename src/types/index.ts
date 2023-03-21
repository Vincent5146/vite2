export interface AddToCart {
  product_id: string;
  qty: number;
}
export interface UpdateOrderPaid {
  is_paid: boolean;
  id: string;
}
export interface UpdateCart {
  product_id: string;
  qty: number;
}
