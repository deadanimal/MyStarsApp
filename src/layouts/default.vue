<template>
    <ion-app>
        <ion-page>
            <MenuBrand v-if="authStore.profileType == 'brand' "></MenuBrand>
            <Menu></Menu>
        </ion-page>
    </ion-app>
</template>
  
<script lang="ts" name="defaultLayout">
import { IonPage, IonApp } from '@ionic/vue';
import Menu from '@/components/Menu.vue';
import MenuBrand from '@/components/MenuBrand.vue';
import { defineComponent } from 'vue';
import { useAuthStore } from "../stores/auth";

export default defineComponent({
    name: 'MenuBrandComponent',
    components: { IonApp, IonPage, Menu, MenuBrand  },
    setup() {
        const authStore = useAuthStore();
        return {
            authStore
        }
    }
});
</script>
  