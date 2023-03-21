import { createApp } from "vue";
import { createPinia } from "pinia";
import { Toast } from 'vant';

import App from "./App.vue";
import router from "./router/index";
import "./style/main.scss";

import { currency, date } from "./methods/filters";

const app = createApp(App);

app.config.globalProperties.$filters = {
  currency,
  date,
};

app.use(router).use(createPinia()).use(Toast).mount("#app");
