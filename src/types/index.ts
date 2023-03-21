export interface AddToCart {
  product_id: string;
  qty: number;
}
export interface UpdateOrderPaid {
  is_paid: boolean,
  id: string,
}