import axios from "axios";
import qs from "qs";
import { AddToCart, UpdateOrderPaid, UpdateCart } from "../types/index";

export default {
  getAllProducts() {
    return axios.get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`);
  },
  getProducts(page = 1) {
    return axios.get(
      `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/?page=${page}`
    );
  },
  addtoCart(data: AddToCart) {
    return axios.post(
      `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart&${qs.stringify(data)}`
    );
  },
  getCart() {
    return axios.get(`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`);
  },
  delCart(id: string) {
    return axios.get(`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`);
  },
  getOrders(currentPage = 1) {
    return axios.get(
      `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/orders?page=${currentPage}`
    );
  },
  updateOrderPaid(data: UpdateOrderPaid) {
    return axios.post(
      `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/order/${
        data.id
      }&${qs.stringify(data.is_paid)}`
    );
  },
  delOrder(id: string) {
    return axios.delete(
      `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/order/${id}`
    );
  },
  updateProduct(data: UpdateCart, isNew: boolean) {
    if (!isNew) {
      return axios.put(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product/${data.product_id}`)
    } else {
      return axios.post(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product`);
    }
  },
  getCoupons() {
    return axios.get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupons`);
  },
  // todo 型別沒改
  updateCoupon(data: UpdateCart, isNew: boolean) {
    if (!isNew) {
      return axios.put(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupon/${data.product_id}`)
    } else {
      return axios.post(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupon`);
    }
  },
  delCoupon(id: string) {
    return axios.delete(
      `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupon/${id}`
    );
  },
};
