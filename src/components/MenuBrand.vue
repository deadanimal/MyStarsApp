<template>
    <ion-tabs>
        <ion-router-outlet></ion-router-outlet>
        <ion-tab-bar slot="bottom">
            <ion-tab-button tab="tab1" href="/brand/dashboard">
                <ion-icon :icon="barChart" />
                <ion-label>Dashboard</ion-label>
            </ion-tab-button>

            <ion-tab-button tab="tab2" href="/brand/briefs">
                <ion-icon :icon="images" />
                <ion-label>Brief</ion-label>
            </ion-tab-button>

            <ion-tab-button tab="tab3" href="/brand/chat">
                <ion-icon :icon="chatbubbles" />
                <ion-label>Chat</ion-label>
            </ion-tab-button>            

            <ion-tab-button tab="tab4" href="/brand/profile">
                <ion-icon :icon="person" />
                <ion-label>Profile</ion-label>
            </ion-tab-button>
        </ion-tab-bar>
    </ion-tabs>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonRouterOutlet } from '@ionic/vue';
import { ellipse, square, triangle,
    barChart, chatbubbles, images, person
 } from 'ionicons/icons';

export default defineComponent({
    name: 'MenuBrandComponent',
    components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonRouterOutlet },
    setup() {
        return {
            ellipse,
            square,
            triangle,
            barChart, chatbubbles, images, person
        }
    }
});
</script>
  