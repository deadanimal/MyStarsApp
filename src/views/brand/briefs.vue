
<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Brief</ion-title>
                <ion-buttons slot="primary">                    
                    <ion-button aria-label="Favorite" href="/brand/briefCreate">
                        <ion-icon :icon="add" aria-hidden="true"></ion-icon>
                        Create
                    </ion-button>
                </ion-buttons>
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
    IonCol, IonGrid, IonRow, IonIcon,

} from '@ionic/vue';
import { defineComponent } from 'vue';
import { useBriefStore } from "../../stores/brief";
import { add
 } from 'ionicons/icons';

export default defineComponent({
    name: 'BrandBriefsView',

    components: {
        IonPage, IonHeader, IonToolbar, IonContent, IonButton, IonButtons, IonTitle, IonItem, IonLabel,
        IonCol, IonGrid, IonRow,
        IonIcon
    },

    data() {
        return {
            briefs: [],
        }
    },

    setup() {
        const briefStore = useBriefStore();
        return { 
            briefStore,
            add
         };
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
  