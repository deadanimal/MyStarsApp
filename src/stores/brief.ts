import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";
import { useAuthStore } from "./auth";
import axios from "axios";
import router from "../router/index";

const authStore = useAuthStore();

export const useBriefStore = defineStore({
  id: "brief",
  state: () => ({
    loading: false,
    error: null,

    briefs: useStorage("briefs", []),
    brief: useStorage("brief", {}),

  }),

  actions: {
    async listBriefs() {
      console.log("listBriefs");

      this.loading = true;
      const url = "https://stars.my/api/briefs/";
      try {
        await axios.get(url, {
          headers: {
            Authorization: "Bearer " + authStore.userToken,
          },
        })
          .then((response: any) => {
            console.log(response);
            this.briefs = response['data']['briefs']
          });
      } catch (error: any) {
        this.error = error;
      } finally {
        this.loading = false;
      }
    },

    async getBrief(id: string) {
      console.log("getBrief: ", id);
      this.loading = true;
      const url = "https://stars.my/api/briefs/" + id;
      try {
        await axios.get(url, {
          headers: {
            Authorization: "Bearer " + authStore.userToken,
          },
        })
          .then((response: any) => {
            console.log(response);
            this.brief = response['data']['brief']
          });
      } catch (error: any) {
        this.error = error;
      } finally {
        this.loading = false;
      }      
    },

    async createBrief(
        title: string
    ) {
      console.log("createBrief");

      this.loading = true;
      const url = "https://stars.my/api/briefs/";
      
      try {
        await axios.post(url, {
            title: title 
        }, {
          headers: {
            Authorization: "Bearer " + authStore.userToken,
          },
      
        })
          .then((response: any) => {
            console.log(response);
            this.briefs = response['data']['briefs']
          });
      } catch (error: any) {
        this.error = error;
      } finally {
        this.loading = false;
      }      
    },

    async updateBrief(id: string) {
      console.log("updateBrief: ", id);
    },
  },
});
