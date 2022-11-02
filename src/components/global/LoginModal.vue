<template>
  <v-dialog class="w-25" v-model="dialog">
    <v-card> </v-card>
  </v-dialog>
</template>

<script setup>
import { ref } from "vue";

const dialog = ref(false);
/*eslint-disable */
function toggleDialog() {
  dialog.value = !dialog.value;
}

defineExpose({
  toggleDialog,
});
/*eslint-enable */
</script>

<style scoped></style>
