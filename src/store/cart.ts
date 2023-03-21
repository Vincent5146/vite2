import { defineStore } from "pinia";
import $api from "../api/product";
import { AddToCart, UpdateCart } from "../types/index";

export const useCartStore = defineStore("cart", {
  state: () => {
    return {
      cart: {},
      total: 0,
      final_total: 0,
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
        this.total = response.data.data.total;
        this.final_total = response.data.data.final_total;
      } catch (e) {
        console.log(e);
      }
    },
    async addtoCart(data: AddToCart) {
      try {
        const { data: response } = await $api.addtoCart(data);
        if (response.data.success) {
          // toast
            // this.emitter.emit("message:push", {
            //   message: response.data.message,
            //   status: "success",
            // });
            // this.emitter.emit("resetCart");
          this.getCart();
        } else {
          // this.emitter.emit("message:push", { message: response.data.message, status: "danger" });
        }
      } catch (e) {
        console.log(e);
      }
    },
    async updateCart(data: UpdateCart, isNew: boolean) {
      try {
        const { data: response } = await $api.updateProduct(data, isNew);
        if (response.data.success) {
          // toast
            // this.emitter.emit("message:push", {
            //   message: response.data.message,
            //   status: "success",
            // });
            // this.emitter.emit("resetCart");
          this.getCart();
        } else {
          // this.emitter.emit("message:push", { message: response.data.message, status: "danger" });
        }
      } catch (e) {
        console.log(e);
      }
    },
    async delCart(id: string) {
      try {
        const { data: response } = await $api.delCart(id);
        if (response.data.success) {
          // emitter.emit("message:push", { message: response.data.message, status: "danger" })
          // this.emitter.emit("resetCart");
          this.getCart();
        } else {
          // emitter.emit("message:push", { message: response.data.message, status: "danger" })
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
