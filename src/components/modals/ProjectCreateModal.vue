<template>
  <Teleport to="body">
    <v-dialog class="w-25" v-model="dialog">
      <v-card>
        <v-card-text>
          <v-form>
            <v-container>
              <v-row class="mb-6">
                <v-text-field label="Название проекта" required></v-text-field>
              </v-row>
              <v-btn class="w-100" variant="outlined" @click="sendProjectData">
                Создать
              </v-btn>
            </v-container>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </Teleport>
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

function sendProjectData() {
  dialog.value = false;
}
</script>

<style scoped></style>
