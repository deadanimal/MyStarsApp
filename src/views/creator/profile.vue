
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
                                profileId: {{ authStore.profileId }} <br/>
                                profileType: {{ authStore.profileType }} <br/>
                                isAuthenticated: {{ authStore.isAuthenticated }} <br/>
                                userToken: {{ authStore.userToken }} <br/>
                                                                
                                name: {{ authStore.name }} <br/>
                                username: {{ authStore.username }} <br/>
                                email: {{ authStore.email }} <br/>

                                <ion-button @click="authStore.logout()">Log Out</ion-button>

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
    IonCol, IonGrid, IonRow,
    IonButton
} from '@ionic/vue';
import { defineComponent } from 'vue';

import { useAuthStore } from "../../stores/auth";
//import { useChatStore } from "../../stores/chat";

export default defineComponent({
    name: 'CreatorProfileView',

    components: {
        IonPage, IonHeader, IonToolbar, IonContent, IonTitle,
        IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,
        IonCol, IonGrid, IonRow,
        IonButton
    },

    data() {
        return {
            chats: [],
        }
    },

    setup() {
        const authStore = useAuthStore();
        return { authStore };
    },

    mounted() {

        this.initialiseStorage();

    },

    methods: {

        initialiseStorage() {
            console.log('initialiseStorage');
        },

        refreshView() {
            console.log('');
        },



    }
});

</script>
  