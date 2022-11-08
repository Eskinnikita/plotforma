<template>
  <div class="theme-toggler">
    <v-switch @click="toggleTheme" inset hide-details />
  </div>
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

<style scoped>
.theme-toggler {
  margin-right: 30px;
}
</style>
