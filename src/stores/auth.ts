
import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';
import axios from "axios";
import router from '../router/index';

export const useAuthStore = defineStore({
    id: 'auth',
    state: () => ({

        loading: false,
        error: null,

        profileId: useStorage('profileId', ''),
        isAuthenticated: useStorage('isAuthenticated', false),
        userToken: useStorage('userToken', ''),
        profileType: useStorage('profileType', 'creator'),

        name: useStorage('name', ''),
        username: useStorage('username', ''),
        email: useStorage('email', ''),
    }),

    actions: {

        async login(email: string, password: string) {

            this.loading = true;
            try {
                await axios.post("https://stars.my/api/login", {
                    email: email,
                    password: password,
                    device_name: '123'
                }).then((response) => {
                    if (response['data']['token']) {
                        this.isAuthenticated = true;
                        this.profileId = response['data']['profileId'];
                        this.profileType = response['data']['profileType'];
                        this.userToken = response['data']['token'];

                        this.name = response['data']['name'];
                        this.username = response['data']['username'];
                        this.email = response['data']['email'];

                        if(this.profileType == 'creator') {
                            router.push('/creator/dashboard');
                        } else {
                            router.push('/brand/dashboard');
                        }
                        
                    } else {
                        console.log(response['data']['error']);
                        this.isAuthenticated = false;
                        this.profileId = '';
                        this.profileType = '';
                        this.userToken = '';

                        this.name = '';
                        this.username = '';
                        this.email = '';
                    }
                })

            } catch (error:any) {
                console.log('error: ', error);
                this.error = error;
            } finally {
                this.loading = false;
            }
        },

        async logout() {
            this.loading = true
            console.log(this.userToken);
            try {
                const options = {
                  method: "POST",
                  url: "https://stars.my/api/logout",
                  headers: {
                    Authorization: "Bearer " + this.userToken,
                  },
                };
        
                await axios.request(options).then((response) => {
                  console.log("Response: ", response);
        
                  if (response["data"]["status"] == "OK") {
                    localStorage.clear();
        
                    this.isAuthenticated = false;
                    this.profileId = "";
                    this.userToken = "";
        
                    this.name = "";
                    this.username = "";
                    this.email = "";

                    router.push("/login");
                  }
                });
              } catch (error: any) {
                console.log("Error: ", error);
                this.error = error;
              } finally {
                this.loading = false;        
              }
        },
    }
})