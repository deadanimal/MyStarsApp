
import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';
import axios from "axios";
import router from '../router/index';

export const useChatStore = defineStore({
    id: 'chat',
    state: () => ({

        loading: false,
        error: null,

        chats: useStorage('chats', []),
   
    }),

    actions: {

        async listChats() {
            console.log('listChats');
        },

        async createChat(message: string) {
            console.log('createChat');
        },


    }
})