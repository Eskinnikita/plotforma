import { defineStore } from "pinia";
import apiService from "@/services/apiService";

export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    projects: [],
  }),
  actions: {
    async createProject() {
      try {
        const newProject = await apiService.get("/project/create", projectData);
        this.projects.push(newProject);
      } catch (e) {
        console.log(e);
      }
    },
  },
});
