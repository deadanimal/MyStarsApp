
<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Content List</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">

            list of contents by creators
            
        </ion-content>
    </ion-page>
</template>
  
<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonContent, IonItem, IonLabel } from '@ionic/vue';
import { defineComponent } from 'vue';
//import { useChatStore } from "../stores/chat";

export default defineComponent({
    name: 'ContentsView',

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
    }
});

</script>
  