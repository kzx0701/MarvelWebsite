import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./routers";
import { createPinia } from "pinia";
import { setGlobalProperties } from "./utils/globalProperties";

const app = createApp(App);
const Pinia = createPinia();

// 设置全局方法
setGlobalProperties(app, router);

app.use(router);
app.use(Pinia);
app.mount("#app");
