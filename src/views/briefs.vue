
<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Briefs</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">

            create brief<br/>
            list of briefs by brand

            
        </ion-content>
    </ion-page>
</template>
  
<script lang="ts">
/* eslint-disable */
import { IonPage, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonContent, IonItem, IonLabel } from '@ionic/vue';
import { defineComponent } from 'vue';
//import { useChatStore } from "../stores/chat";

export default defineComponent({
    name: 'BriefsView',

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
  