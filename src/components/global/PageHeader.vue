<template>
  <v-app-bar class="header" elevation="0">
    <LoginModal ref="loginModal" />
    <RegistrationModal ref="registrationModal" />
    <div class="header__container d-flex justify-space-between w-100">
      <div class="header__left d-flex flex-start">
        <div class="header__logo d-flex align-center">
          <router-link to="/">
            <h2 class="text-primary">PLOTforma</h2>
          </router-link>
        </div>
        <div class="header__nav">
          <v-tabs v-model="tab">
            <v-tab value="/">Главная</v-tab>
            <v-tab value="/library">Мои проекты</v-tab>
          </v-tabs>
        </div>
      </div>
      <div class="header__profile profile d-flex align-center">
        <div class="header__theme-toggler">
          <ThemeToggler />
        </div>
        <div
          class="profile__sing-in"
          v-if="routeName !== 'sing-in' && !userStore.user"
        >
          <v-btn @click="openRegistrationModal" class="ma-2"
            >Зарегистрироваться</v-btn
          >
          <v-btn @click="openLoginModal" variant="outlined">Войти</v-btn>
        </div>
        <div v-else class="profile__user">
          <v-btn variant="plain">
            {{ userStore.user.username }}
            <v-menu activator="parent">
              <v-list>
                <v-list-item @click="logout" link>
                  <v-list-item-title>Выйти</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-btn>
        </div>
      </div>
    </div>
  </v-app-bar>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useUserStore } from "@/stores/user";

import LoginModal from "@/components/modals/LoginModal.vue";
import RegistrationModal from "@/components/modals/RegistrationModal.vue";
import ThemeToggler from "@/components/global/ThemeToggler.vue";

const userStore = useUserStore();
const router = useRouter();
const route = useRoute();

const loginModal = ref();
const registrationModal = ref();

function openLoginModal() {
  loginModal.value.toggleDialog();
}

function openRegistrationModal() {
  registrationModal.value.toggleDialog();
}

function logout() {
  userStore.logout();
  router.push("/");
}

//watch router to hide sing-in-up block
let routeName = ref("/");
//handle navigation tabs changes
let tab = ref();
tab.value = route.path;
watch(
  () => route.name,
  () => {
    tab.value = route.path;
    routeName.value = route.name;
  }
);
//route to navigation tab path
watch(tab, (newPage) => {
  router.push(newPage);
});
</script>

<style lang="scss">
.header {
  &__container {
    padding: 0 40px;
  }

  &__nav {
    margin-left: 50px;
  }
}
</style>
