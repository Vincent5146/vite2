import { defineStore } from "pinia";
import $api from "../api/product";
import { AddToCart } from "../types/index";

export const useCartStore = defineStore("cart", {
  state: () => {
    return {
      cart: {},
      products: [],
      pagination: 0,
    };
  },
  getters: {},
  actions: {
    async getCart() {
      try {
        const { data: response } = await $api.getCart();
        this.cart = response.data.data;
      } catch (e) {
        console.log(e);
      }
    },
    async addtoCart(data: AddToCart) {
      try {
        const { data: response } = await $api.addtoCart(data);
        if (response.data.success) {
          // toast
        }
      } catch (e) {
        console.log(e);
      }
    },
    async delCart(id: string) {
      try {
        const { data: response } = await $api.delCart(id);
        if (response.data.success) {
          this.getCart();
        }
      } catch (e) {
        console.log(e);
      }
    },
    async getAllProducts() {
      try {
        const { data: response } = await $api.getAllProducts();
        if (response.data.success) {
          this.products = response.data.products;
        }
      } catch (e) {
        console.log(e);
      }
    },
    async getProducts(page: number) {
      try {
        const { data: response } = await $api.getProducts(page);
        if (response.data.success) {
          this.products = response.data.products;
        }
      } catch (e) {
        console.log(e);
      }
    },
  },
});
