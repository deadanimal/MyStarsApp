
import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';
import axios from "axios";
import router from '../router/index';

export const useBriefStore = defineStore({
    id: 'brief',
    state: () => ({

        loading: false,
        error: null,

        briefs: useStorage('briefs', []),
        brief: useStorage('brief', {}),
   
    }),

    actions: {

        async listBriefs() {
            console.log('listBriefs');
        },

        async getBrief(id: string) {
            console.log('getBrief: ', id);
        },

        async createBrief() {
            console.log('createBrief');
        },

        async updateBrief(id: string) {
            console.log('updateBrief: ', id);
        },


        async logout() {
            this.loading = true
            try {

                await axios.delete("https://memoir.my/api/logout", {
                    headers: {
                        Authorization: 'Bearer ' + this.userToken
                    }
                })
                    .then((response: any) => {
                        console.log(response)
                        var responseJson = response.json()
                        console.log(responseJson)
                        if (responseJson['status'] == 'OK') {

                            localStorage.clear();

                            this.isAuthenticated = false;
                            this.userId = '';
                            this.profileId = ''
                            this.userToken = '';

                            this.name = '';
                            this.username = '';
                            this.email = '';

                            router.push('/login');
                        }
                    })
            } catch (error: any) {
                this.error = error;
            } finally {
                this.loading = false;


            }
        },
    }
})