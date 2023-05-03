
import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';
import axios from "axios";
import router from '../router/index';

export const useContentStore = defineStore({
    id: 'content',
    state: () => ({

        loading: false,
        error: null,

        contents: useStorage('contents', []),
        content: useStorage('content', {}),
   
    }),

    actions: {

        async listContents() {
            console.log('listContents');
        },

        async getContent(id: string) {
            console.log('getContent: ', id);
        },

        async createContent() {
            console.log('createContent');
        },

        async updateContent(id: string) {
            console.log('updateContent: ', id);
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