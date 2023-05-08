
<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Soph</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">

        


        </ion-content>
    </ion-page>
</template>
  
<script lang="ts">
import {
    IonPage, IonHeader, IonToolbar, IonTitle, IonContent,
    
    
} from '@ionic/vue';
import { defineComponent } from 'vue';
//import { useChatStore } from "../stores/chat";

export default defineComponent({
    name: 'CreatorExploreView',

    components: {
        IonPage, IonHeader, IonToolbar, IonContent, IonTitle, 
        
        
    },

    data() {
        return {
            chats: [],
        }
    },

    setup() {
        // const chatStore = useChatStore();
        // return { chatStore };
    },

    mounted() {

        this.initialiseStorage();

    },

    methods: {

        initialiseStorage() {
            console.log('');
        },

        refreshView() {
            console.log('');
        },


    }
});

</script>
  