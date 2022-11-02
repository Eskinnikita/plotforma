<template>
  <v-app-bar class="header" elevation="0">
    <div class="header__container d-flex justify-space-between w-100">
      <div class="header__logo">
        <h2>PLOTforma</h2>
      </div>
      <div class="header__login d-flex align-center">
        <v-btn class="ma-2">Создать аккаунт</v-btn>
        <v-btn variant="outlined">Войти</v-btn>
      </div>
    </div>
  </v-app-bar>
</template>

<script setup></script>

<style lang="scss">
.header {
  &__container {
    padding: 0 40px;
  }
}
</style>
