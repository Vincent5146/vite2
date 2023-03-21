import { defineStore } from "pinia";
import $api from "../api/product";

export const useCartStore = defineStore("cart", {
  state: () => {
    return {
      cart: {},
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
  },
});
