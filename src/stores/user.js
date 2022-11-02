import { defineStore } from "pinia";
import apiService from "@/services/apiService";

export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    user: {},
    token: localStorage.getItem("user-token") || "",
  }),
  actions: {
    async loginUser(loginModalData) {
      try {
        const userData = await apiService.post("/auth/login", loginModalData);
        console.log(userData);
        this.user = userData.data.user;
        localStorage.setItem("user-token", userData.data.token);
      } catch (e) {
        console.log(e);
      }
    },
  },
});
