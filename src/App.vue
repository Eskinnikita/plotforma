<template>
  <v-app>
    <PageHeader />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import PageHeader from "@/components/global/PageHeader.vue";
</script>
