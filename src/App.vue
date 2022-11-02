<template>
  <v-app>
    <PageHeader />
    <v-main>
      <div class="app-container">
        <router-view />
      </div>
    </v-main>
  </v-app>
</template>

<script setup>
import PageHeader from "@/components/global/PageHeader.vue";
</script>

<style lang="scss">
.app-container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 30px 20px;
}

a {
  color: #000;
  text-decoration: none;
}
</style>
