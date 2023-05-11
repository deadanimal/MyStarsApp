
<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Chat with Soph</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">


            <ion-item>
                <ion-label class="ion-text-wrap">
                    Multi-line text that should wrap when it is too long to fit on one line. Lorem ipsum dolor sit amet,
                    consectetur
                    adipiscing elit.
                </ion-label>
            </ion-item>

            <ion-item>
                <ion-textarea label="Regular textarea" placeholder="Type something here"></ion-textarea>
            </ion-item>

        </ion-content>
    </ion-page>
</template>
  
<script lang="ts">
import {
    IonPage, IonHeader, IonToolbar, IonTitle, IonContent,
    IonItem, IonLabel, IonTextarea

} from '@ionic/vue';
import { defineComponent } from 'vue';
import { useChatStore } from "../../stores/chat";

export default defineComponent({
    name: 'BrandChatView',

    components: {
        IonPage, IonHeader, IonToolbar, IonContent, IonTitle,
        IonItem, IonLabel, IonTextarea

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
  