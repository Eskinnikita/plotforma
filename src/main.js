import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import axios from "axios";
import { loadFonts } from "./plugins/webfontloader";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

const token = localStorage.getItem("user-token");
if (token) {
  axios.defaults.headers.common["Authorization"] = token;
}

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

loadFonts();

createApp(App).use(router).use(vuetify).use(pinia).mount("#app");
