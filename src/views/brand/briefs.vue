
<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Brief</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">

            <ion-grid :fixed="true">
                <ion-row>
                    <ion-col>
                    
                    </ion-col>
                    <ion-col>
                  
                    </ion-col>
                </ion-row>
                <ion-row>

                </ion-row>
            </ion-grid>



        </ion-content>
    </ion-page>
</template>
  
<script lang="ts">
/* eslint-disable */
import {
    IonPage, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonContent, IonItem, IonLabel,
    IonCol, IonGrid, IonRow
} from '@ionic/vue';
import { defineComponent } from 'vue';
//import { useChatStore } from "../stores/chat";

export default defineComponent({
    name: 'BrandBriefsView',

    components: {
        IonPage, IonHeader, IonToolbar, IonContent, IonButton, IonButtons, IonTitle, IonItem, IonLabel,
        IonCol, IonGrid, IonRow
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

        initialiseStorage() { },

        refreshView() { },


    }
});

</script>
  