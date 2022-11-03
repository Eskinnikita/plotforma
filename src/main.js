import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import axios from "axios";
import { loadFonts } from "./plugins/webfontloader";
import { createPinia } from "pinia";

const token = localStorage.getItem("user-token");
if (token) {
  axios.defaults.headers.common["Authorization"] = token;
}

const pinia = createPinia();

loadFonts();

createApp(App).use(router).use(vuetify).use(pinia).mount("#app");
