<template>
    <ion-app>
        <ion-page>
            <MenuCreator></MenuCreator>
        </ion-page>
    </ion-app>
</template>
  
<script lang="ts" name="defaultLayout">
import { IonPage, IonApp } from '@ionic/vue';
import MenuCreator from '@/components/MenuCreator.vue';
import { defineComponent } from 'vue';
import { useAuthStore } from "../stores/auth";

export default defineComponent({
    name: 'MenuCreatorComponent',
    components: { IonApp, IonPage, MenuCreator  },
    setup() {
        const authStore = useAuthStore();
        return {
            authStore
        }
    }
});
</script>
  