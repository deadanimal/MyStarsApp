
<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Content Detail</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">

            whos the creators, affliate link if any.. platform details, link, etc.
            for creator, it should be income.
            engagement details...
            
        </ion-content>
    </ion-page>
</template>
  
<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonContent, IonItem, IonLabel } from '@ionic/vue';
import { defineComponent } from 'vue';
//import { useChatStore } from "../stores/chat";

export default defineComponent({
    name: 'ContentDetailView',

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
  