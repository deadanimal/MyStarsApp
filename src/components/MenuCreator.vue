<template>
    <ion-tabs>
        <ion-router-outlet></ion-router-outlet>
        <ion-tab-bar slot="bottom">
            <ion-tab-button tab="tab1" href="/creator/dashboard">
                <ion-icon :icon="triangle" />
                <ion-label>Dashboard</ion-label>
            </ion-tab-button>

            <ion-tab-button tab="tab2" href="/creator/explore">
                <ion-icon :icon="ellipse" />
                <ion-label>Explore</ion-label>
            </ion-tab-button>

            <ion-tab-button tab="tab3" href="/creator/contents">
                <ion-icon :icon="ellipse" />
                <ion-label>Content</ion-label>
            </ion-tab-button>            

            <ion-tab-button tab="tab4" href="/creator/profile">
                <ion-icon :icon="square" />
                <ion-label>Profile</ion-label>
            </ion-tab-button>
        </ion-tab-bar>
    </ion-tabs>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonRouterOutlet } from '@ionic/vue';
import { ellipse, square, triangle } from 'ionicons/icons';

export default defineComponent({
    name: 'MenuCreatorComponent',
    components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonRouterOutlet },
    setup() {
        return {
            ellipse,
            square,
            triangle,
        }
    }
});
</script>
  