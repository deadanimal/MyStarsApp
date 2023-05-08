
<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Brief Detail</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">

            number of contents, total engagement, descriptions...
            brand - list of content, to favourite/reject content.
            creator - maximum payout, affliate details
            
        </ion-content>
    </ion-page>
</template>
  
<script lang="ts">
/* eslint-disable */
import { IonPage, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonContent, IonItem, IonLabel } from '@ionic/vue';
import { defineComponent } from 'vue';
//import { useChatStore } from "../stores/chat";

export default defineComponent({
    name: 'BriefDetailView',

    components: {
        IonPage, IonHeader, IonToolbar, IonContent, IonButton, IonButtons, IonTitle, IonItem, IonLabel,
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
        this.refreshView();
    },

    methods: {

        refreshView() {},

        actionOnContent() {},


    }
});

</script>
  