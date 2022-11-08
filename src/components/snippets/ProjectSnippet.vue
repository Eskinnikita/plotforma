<template>
  <div class="project-snippet"></div>
</template>

<script setup></script>

<style scoped lang="scss">
.project-snippet {
  width: 100%;
  aspect-ratio: 2 / 3;
  border-radius: 4px;
  background: rgb(var(--v-theme-primary));
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    transform: scale(1.03);
  }
}
</style>
