
<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <!-- <ion-title>Create Brief</ion-title> -->
                <ion-buttons slot="start">
                    <ion-button href="/brand/briefs">
                        Back
                    </ion-button>
                </ion-buttons>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">

            <ion-grid :fixed="true">
                <ion-row>
                    <ion-col>
                        <ion-list>
                            <ion-list>
                                <ion-item>
                                    <ion-input label="Title" placeholder="Enter the title of the brief"></ion-input>
                                </ion-item>

                                <ion-item>
                                    <ion-textarea label="Creative Direction" placeholder="Type something here"></ion-textarea>
                                </ion-item>                                

                                <ion-item>
                                    <ion-input label="Budget" type="number" placeholder="000"></ion-input>
                                </ion-item>

                            </ion-list>
                        </ion-list>

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
    IonCol, IonGrid, IonRow, IonIcon, IonList,
    IonBackButton, IonInput, IonTextarea
} from '@ionic/vue';
import { defineComponent } from 'vue';
import { useBriefStore } from "../../stores/brief";
import {
    add
} from 'ionicons/icons';

export default defineComponent({
    name: 'BrandBriefCreateView',

    components: {
        IonPage, IonHeader, IonToolbar, IonContent, IonButton, IonButtons, IonTitle, IonItem, IonLabel,
        IonCol, IonGrid, IonRow, IonList, IonIcon, IonBackButton, IonInput, IonTextarea
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
  