
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


    }
})