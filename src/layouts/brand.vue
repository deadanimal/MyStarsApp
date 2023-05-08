<template>
    <ion-app>
        <ion-page>
            <MenuBrand></MenuBrand>
        </ion-page>
    </ion-app>
</template>
  
<script lang="ts" name="defaultLayout">
import { IonPage, IonApp } from '@ionic/vue';
import MenuBrand from '@/components/MenuBrand.vue';
import { defineComponent } from 'vue';
import { useAuthStore } from "../stores/auth";

export default defineComponent({
    name: 'MenuBrandComponent',
    components: { IonApp, IonPage, MenuBrand  },
    setup() {
        const authStore = useAuthStore();
        return {
            authStore
        }
    }
});
</script>
  