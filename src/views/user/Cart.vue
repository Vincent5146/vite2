<template>
  <div class="cart">
    <Loading :active="state.isLoading" />
    <div class="container">
      <div class="d-flex justify-content-center">
        <h1 class="fs-2 fw-bold">購物車清單</h1>
      </div>
      <div class="table-responsive-md mt-4">
        <table class="table lh-lg">
          <thead class="table-dark text-center">
            <tr class="table-nowrap">
              <th width="100"></th>
              <th>商品名稱</th>
              <th width="200" class="text-end">單價</th>
              <th width="250">數量</th>
              <th width="200" class="text-end">價格</th>
            </tr>
          </thead>
          <tbody class="text-center">
            <tr class="table-nowrap" v-for="item in carts" :key="item.id">
              <td>
                <a href="#" @click.prevent="delCart(item.id)">
                  <span class="material-icons">
                    <i class="fas fa-trash"></i>
                  </span>
                </a>
              </td>
              <td>{{ item.product.title }}</td>
              <td class="text-end">NT$ {{ $filters.currency(item.product.price) }} 元</td>
              <td>
                <div class="d-flex justify-content-center">
                  <div class="input-group" style="width: 110px">
                    <button
                      class="btn btn-dark btn-sm btn-hover rounded-0 border-0"
                      style="width: 29px"
                      type="button"
                      @click="updateCart(item.id, item.qty - 1)"
                    >
                      -
                    </button>
                    <input
                      type="text"
                      class="form-control text-center"
                      disabled
                      v-model.number="item.qty"
                    />
                    <button
                      class="btn btn-dark btn-sm btn-hover rounded-0 border-0"
                      style="width: 29px"
                      type="button"
                      @click="updateCart(item.id, item.qty + 1)"
                    >
                      +
                    </button>
                  </div>
                </div>
              </td>
              <td class="text-end">
                NT$ {{ $filters.currency(item.final_total) }} 元
                <br />
                <small class="text-strong" v-if="item.final_total !== item.total"
                  >( 已套用優惠碼 )</small
                >
              </td>
            </tr>
          </tbody>
          <tfoot class="text-center">
            <tr v-if="carts.length !== 0">
              <td colspan="4" class="text-end">總價 :</td>
              <td class="text-end">NT$ {{ $filters.currency(state.total) }} 元</td>
            </tr>
            <tr v-if="state.final_total !== state.total">
              <td colspan="4" class="text-end text-strong">折扣價 :</td>
              <td class="text-strong text-end">
                NT$ {{ $filters.currency(state.final_total) }} 元
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
      <!-- 套用優惠碼 -->
      <div
        class="input-group mb-3 input-group-sm"
        style="justify-content: flex-end"
        v-if="carts.length !== 0"
      >
        <input type="text" class="coupon" v-model="state.coupon_code" placeholder="請輸入優惠碼" />
        <div class="input-group-append">
          <button
            class="btn btn-dark btn-hover rounded-0 border-0"
            type="button"
            @click="addCouponCode()"
          >
            套用優惠碼
          </button>
        </div>
      </div>
      <div class="d-flex justify-content-between mt-5" v-if="carts.length !== 0">
        <button type="button" class="btn btn-outline-dark btn-hover rounded-0" @click="goProducts">
          回商品列表
        </button>
        <button type="button" class="btn btn-dark btn-hover rounded-0" @click="goCheckout">
          下一步 填寫資料
        </button>
      </div>
      <div class="text-center pt-4" v-if="carts.length === 0">
        <h3 class="fw-bold">購物車還沒有任何商品，趕快挑選產品加入購物車 !</h3>
        <button type="button" class="btn btn-dark btn-hover rounded-0 mt-5" @click="goProducts">
          查看產品 Go
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useCartStore } from "../../store/cart";

const store = useCartStore();
const $router = useRouter();
const state = reactive({
  isLoading: false,
  cart: store.cart,
  total: store.total,
  final_total: store.final_total,
  coupon_code: "",
});

function getCart() {
  state.isLoading = true;
  store.getCart();
  state.isLoading = false;
}
// function addtoCart(id: string, qty: number) {
//   state.isLoading = true;
//   const cart = {
//     product_id: id,
//     qty,
//   };
//   store.addtoCart(cart);
//   state.isLoading = false;
// }
function updateCart(id: string, qty: number) {
  state.isLoading = true;
  const cart = {
    product_id: id,
    qty,
  };
  store.updateCart(cart, false);
  state.isLoading = false;
}
function delCart(id: string) {
  state.isLoading = true;
  store.delCart(id);
  state.isLoading = false;
}
// addCouponCode() {
//   const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/coupon`;
//   const coupon = {
//     code: this.coupon_code,
//   };
//   this.isLoading = true;
//   this.$http
//     .post(api, { data: coupon })
//     .then((response) => {
//       if (response.data.success) {
//         this.emitter.emit("message:push", {
//           message: response.data.message,
//           status: "success",
//         });
//         this.getCart();
//         this.isLoading = false;
//       } else {
//         this.emitter.emit("message:push", { message: response.data.message, status: "danger" });
//         this.isLoading = false;
//       }
//     })
//     .catch((error) => {
//       console.warn(error, "error");
//       this.isLoading = false;
//     });
// },
function goProducts() {
  $router.push("/products");
}
function goCheckout() {
  $router.push("/checkout");
}

onMounted(() => {
  getCart();
});
</script>

<style lang="scss" scoped>
.cart {
  margin-top: 100px;
  min-height: calc(100vh - 250px);
}
.material-icons {
  font-size: 20px;
  color: #45615b;
  transition: all 0.3s;
  &:hover {
    color: #d3130c;
  }
}
.coupon {
  border: 1px solid #ccc;
  padding: 0 10px;
  @media only screen and (max-width: 414px) {
    width: 150px;
  }
}
</style>
