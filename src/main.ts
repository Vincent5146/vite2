import { createApp } from "vue"
import { createPinia } from "pinia"

import App from "./App.vue"
import router from "./router/index"
import "./style/main.scss";

const app = createApp(App)

app.use(router).use(createPinia()).mount("#app")
