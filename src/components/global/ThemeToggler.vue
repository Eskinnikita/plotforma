<template>
  <v-btn class="theme-toggler" @click="toggleTheme"> f </v-btn>
</template>

<script setup>
import { useTheme } from "vuetify";

const theme = useTheme();
theme.global.name.value = localStorage.getItem("color-theme") || "light";
function toggleTheme() {
  const colorTheme = theme.global.current.value.dark ? "light" : "dark";
  theme.global.name.value = colorTheme;
  localStorage.setItem("color-theme", colorTheme);
}
</script>

<style scoped></style>
