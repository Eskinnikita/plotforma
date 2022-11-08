<template>
  <div class="library">
    <div class="library__header d-flex justify-space-between">
      <h2>Мои проекты</h2>
      <v-btn @click="openProjectCreateModal" variant="outlined">Добавить</v-btn>
    </div>
    <div class="library__projects"></div>
    <ProjectCreateModal ref="projectCreateModal" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import ProjectCreateModal from "@/components/modals/ProjectCreateModal.vue";

const projectCreateModal = ref();
function openProjectCreateModal() {
  projectCreateModal.value.toggleDialog();
}
</script>

<style scoped></style>
