import { defineStore } from "pinia";
import $api from "../api/product";
import { UpdateOrderPaid } from "../types/index";

export const useCartStore = defineStore("cart", {
  state: () => {
    return {
      orders: {},
      tempOrder: {},
      pagination: {},
      currentPage: 1,
    };
  },
  getters: {},
  actions: {
    async getOrders(currentPage = 1) {
      try {
        const { data: response } = await $api.getOrders(currentPage);
        this.orders = response.data.orders;
        this.pagination = response.data.pagination;
      } catch (e) {
        console.log(e);
      }
    },
    async updateOrderPaid(data: UpdateOrderPaid) {
      try {
        const { data: response } = await $api.updateOrderPaid(data);
        if (response.data.success) {
          this.getOrders(this.currentPage);
        }
      } catch (e) {
        console.log(e);
      }
    },
    async delOrder(id: string) {
      try {
        const { data: response } = await $api.delOrder(id);
        if (response.data.success) {
        }
      } catch (e) {
        console.log(e);
      }
    }
  },
});
