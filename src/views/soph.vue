
<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Soph</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">

            whatsapp chat-like UI/UX...
            
        </ion-content>
    </ion-page>
</template>
  
<script lang="ts">
/* eslint-disable */
import { IonPage, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonContent, IonItem, IonLabel } from '@ionic/vue';
import { defineComponent } from 'vue';
import { useChatStore } from "../stores/chat";

export default defineComponent({
    name: 'SophView',

    components: {
        IonPage, IonHeader, IonToolbar, IonContent, IonButton, IonButtons, IonTitle, IonItem, IonLabel,
    },

    data() {
        return {
            chats: [],
        }
    },

    setup() {
        const chatStore = useChatStore();
        return { chatStore };
    },

    mounted() {
        this.chats = this.chatStore.chats;
    },

    methods: {

        chat(message: string) {
            this.chatStore.createChat(message)
        },

    }
});

</script>
  