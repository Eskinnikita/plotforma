<template>
  <div class="library">
    <div class="library__header d-flex justify-space-between">
      <h2>Мои проекты</h2>
      <v-btn @click="openProjectCreateModal" variant="outlined">Добавить</v-btn>
    </div>
    <div class="library__projects">
      <ProjectSnippet v-for="index in 10" :key="index" />
    </div>
    <ProjectCreateModal ref="projectCreateModal" />
  </div>
</template>

<script setup>
import { ref } from "vue";

import ProjectCreateModal from "@/components/modals/ProjectCreateModal.vue";
import ProjectSnippet from "@/components/snippets/ProjectSnippet.vue";

const projectCreateModal = ref();
function openProjectCreateModal() {
  projectCreateModal.value.toggleDialog();
}
</script>

<style scoped lang="scss">
.library {
  &__projects {
    margin-top: 50px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 30px;
    align-items: start;
  }
}
</style>
