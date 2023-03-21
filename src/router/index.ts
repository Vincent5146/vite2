import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../views/index.vue'),
    children: [
      {
        path: '/',
        component: () => import('../views/user/Home.vue')
      },
      // {
      //   path: 'about',
      //   component: () => import('../views/user/About.vue')
      // },
      // {
      //   path: 'products',
      //   component: () => import('../views/user/UserProducts.vue')
      // },
      // {
      //   path: 'product/:productId',
      //   component: () => import('../views/user/UserProduct.vue')
      // },
      // {
      //   path: 'cart',
      //   component: () => import('../views/user/Cart.vue')
      // },
      // {
      //   path: 'checkout',
      //   component: () => import('../views/user/Checkout.vue')
      // },
      // {
      //   path: 'checkpayment/:productId',
      //   component: () => import('../views/user/Checkpayment.vue')
      // },
      // {
      //   path: 'orders',
      //   component: () => import('../views/user/Checkorder.vue')
      // },
      // {
      //   path: 'followPage',
      //   component: () => import('../views/user/Followpage.vue')
      // },
      // {
      //   path: 'user',
      //   component: () => import('../views/user/Serviceboard.vue'),
      //   children: [
      //     {
      //       path: 'boarding',
      //       component: () => import('../views/user/services/Boarding.vue')
      //     },
      //     {
      //       path: 'daycare',
      //       component: () => import('../views/user/services/Daycare.vue')
      //     },
      //     {
      //       path: 'spa',
      //       component: () => import('../views/user/services/Spa.vue')
      //     },
      //     {
      //       path: 'swimming',
      //       component: () => import('../views/user/services/Swimming.vue')
      //     }
      //   ]
      // }
    ]
  },
  // {
  //   path: '/login',
  //   component: () => import('../views/Login.vue')
  // },
  // {
  //   path: '/admin',
  //   component: () => import('../views/admin/Admin.vue'),
  //   children: [
  //     {
  //       path: 'products',
  //       component: () => import('../views/admin/Products.vue')
  //     },
  //     {
  //       path: 'orders',
  //       component: () => import('../views/admin/Orders.vue')
  //     },
  //     {
  //       path: 'coupons',
  //       component: () => import('../views/admin/Coupons.vue')
  //     }
  //   ]
  // },
  // {
  //   path: '/:pathMatch(.*)*',
  //   name: 'not-found',
  //   component: () => import('../views/user/Home.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  // linkActiveClass: 'active',
  // scrollBehavior (to, from, savedPosition) {
  //   return { left: 0, top: 0 }
  // },
  routes
})

export default router
