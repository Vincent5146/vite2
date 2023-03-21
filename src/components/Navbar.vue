<template>
  <div class="nav">
    <nav class="navbar navbar-expand-lg navbar-light bg-light text-dark fixed-top">
      <div class="container">
        <h1 class="d-flex align-items-center mb-1 mt-1">
          <router-link to="/"
            ><span class="material-icons logo-icon"><i class="fas fa-cat"></i></span
          ></router-link>
        </h1>
        <div class="icon-box order-lg-2 justify-content-around icon-link-wrap ms-auto">
          <div class="login">
            <router-link to="/login" class="btn d-flex">
              <span class="material-icons login-icon"><i class="fas fa-user-circle"></i></span>
            </router-link>
          </div>
          <div class="dropdown cart">
            <a
              class="btn d-flex"
              href="#"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span class="material-icons cart-icon"><i class="fas fa-shopping-cart"></i></span>
              <div class="cart-num" v-if="cart?.carts?.length !== 0">
                {{ cart?.carts?.length }}
              </div>
            </a>
            <div class="dropdown-menu pe-2 ps-2" aria-labelledby="dropdownMenuLink">
              <table class="w-100">
                <tbody>
                  <tr class="border-bottom border-primary">
                    <th>品名</th>
                    <th class="text-center">數量</th>
                    <th class="text-center">單價</th>
                  </tr>
                  <tr v-for="item in cart.carts" :key="item.id">
                    <td>
                      <div>
                        {{ item.product.title }}
                      </div>
                    </td>
                    <td class="text-center">
                      {{ item.qty }}
                    </td>
                    <td class="text-center">
                      {{ $filters.currency(item.product.price) }}
                    </td>
                  </tr>
                  <tr class="bg-white text-end">
                    <td colspan="3">
                      <span class="text-center w-100 d-block" v-if="cart?.carts?.length === 0">
                        趕快放入喜歡的商品吧!
                      </span>
                      <span class="d-flex justify-content-end align-items-center" v-else>
                        總計: $
                        <span class="price-dlr material-icons"></span>
                        {{ $filters.currency(cart.total) }}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <router-link
                class="btn btn-secondary w-100"
                to="/products"
                v-if="cart?.carts?.length === 0"
              >
                購物去
              </router-link>
              <router-link class="btn btn-secondary btn-hover w-100" to="/cart" v-else>
                查看購物車
              </router-link>
            </div>
          </div>
        </div>
        <button
          class="navbar-toggler justify-content-center text-center navbtn"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="material-icons menu-icon"> menu </span>
        </button>
        <div
          class="collapse navbar-collapse order-lg-1 justify-content-end text-start"
          id="navbarNav"
        >
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/products" class="nav-link">寵物周邊</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/user/boarding" class="nav-link">提供服務</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/orders" class="nav-link">訂單查詢</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/followPage" class="nav-link">我的收藏</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link">關於綿綿</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { reactive, onMounted, computed } from "vue"
import { useRouter } from "vue-router"

const $router = useRouter()
const state = reactive({
  isLoading: false,
  cart: {
    carts: [],
  },
})

function logout() {
  const api = `${process.env.VUE_APP_API}logout`
  $http.post(api, user).then((res) => {
    if (res.data.success) {
      $router.push("/login")
    }
  })
}
function getCart() {
  const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
  isLoading = true
  $http.get(api).then((response) => {
    if (response.data.success) {
      cart = response.data.data
      isLoading = false
    }
  })
}
function delCart(id) {
  const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`
  isLoading = true
  $http.delete(api).then((response) => {
    if (response.data.success) {
      emitter.emit("message:push", { message: response.data.message, status: "danger" })
      getCart()
      isLoading = false
    } else {
      emitter.emit("message:push", { message: response.data.message, status: "danger" })
      isLoading = false
    }
  })
}
function goCart() {
  $router.push("/cart")
}
function goProducts() {
  $router.push("/products/all")
}

// watch: {
//     // 轉址時nav選單隱藏
//     $route() {
//       document.querySelector("#navbarNav").classList.remove("show")
//     },
//   },
// created() {
//     this.getCart()
//     this.emitter.on("resetCart", this.getCart)
//   },
</script>
