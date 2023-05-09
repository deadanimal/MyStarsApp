
<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Dashboard</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">

            <ion-grid :fixed="true">
                <ion-row>
                    <ion-col>
                        <ion-card>
                            <ion-card-header>
                                <ion-card-title>Card Title</ion-card-title>
                                <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
                            </ion-card-header>

                            <ion-card-content>
                                brand<br />
                                what is here: active briefs, total lifetime engagement
                                list of recent briefs
                            </ion-card-content>
                        </ion-card>
                    </ion-col>
                    <ion-col>
                        <ion-card>
                            <ion-card-header>
                                <ion-card-title>Card Title</ion-card-title>
                                <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
                            </ion-card-header>

                            <ion-card-content>
                                Here's a small text description for the card content. Nothing more, nothing less.
                            </ion-card-content>
                        </ion-card>
                    </ion-col>
                </ion-row>
                <ion-row>

                </ion-row>
            </ion-grid>

        </ion-content>
    </ion-page>
</template>
  
<script lang="ts">

import {
    IonPage, IonHeader, IonToolbar, IonTitle, IonContent,
    IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,
    IonCol, IonGrid, IonRow
} from '@ionic/vue';
import { defineComponent } from 'vue';
//import { useChatStore } from "../stores/chat";

export default defineComponent({
    name: 'BrandDashboardView',

    components: {
        IonPage, IonHeader, IonToolbar, IonContent, IonTitle,
        IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,
        IonCol, IonGrid, IonRow
    },

    data() {
        return {
            chats: [],
        }
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
  