<template>
  <v-app-bar class="header" elevation="0">
    <LoginModal ref="loginModal" />
    <div class="header__container d-flex justify-space-between w-100">
      <div class="header__logo d-flex align-center">
        <router-link to="/">
          <h2>PLOTforma</h2>
        </router-link>
      </div>
      <div class="header__profile profile d-flex align-center">
        <div class="profile__sing-in" v-if="routeName !== 'sing-in'">
          <v-btn @click="openLoginModal" class="ma-2">Создать аккаунт</v-btn>
          <v-btn @click="openLoginModal" variant="outlined">Войти</v-btn>
        </div>
      </div>
    </div>
  </v-app-bar>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

import LoginModal from "@/components/global/LoginModal.vue";

const loginModal = ref();
function openLoginModal() {
  loginModal.value.toggleDialog();
}

//watch router to hide sing-in-up block
const route = useRoute();
let routeName = ref("/");
watch(
  () => route.name,
  () => {
    routeName.value = route.name;
  }
);
</script>

<style lang="scss">
.header {
  &__container {
    padding: 0 40px;
  }
}
</style>
