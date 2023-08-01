import { createApp } from "vue";
import App from "./App.vue";
import "./assets/scss/index.scss";
import Notifications from "@kyvg/vue3-notification";
import router from "./router";
import store from "./store";

createApp(App).use(Notifications).use(router).use(store).mount("#app");
