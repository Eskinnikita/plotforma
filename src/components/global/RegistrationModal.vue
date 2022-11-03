<template>
  <Teleport to="body">
    <v-dialog class="w-25" v-model="dialog">
      <v-card>
        <v-card-title>Регистрация</v-card-title>
        <v-card-text>
          <v-container>
            <v-row class="mb-6">
              <v-text-field
                v-model="userData.email"
                label="Электронная почта"
                required
              ></v-text-field>
            </v-row>
            <v-row class="mb-6">
              <v-text-field
                v-model="userData.email"
                label="Имя пользователя"
                required
              ></v-text-field>
            </v-row>
            <v-row class="mb-6">
              <v-text-field
                v-model="userData.password"
                label="Пароль"
                type="password"
                required
              ></v-text-field>
            </v-row>
            <v-row class="mb-6">
              <v-text-field
                v-model="userData.password"
                label="Пароль еще раз"
                type="password"
                required
              ></v-text-field>
            </v-row>
            <v-btn
              class="w-100"
              variant="outlined"
              @click="sendRegistrationData"
            >
              Создать аккаунт
            </v-btn>
          </v-container>
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

//Let parent component access child functions with refs
let userData = ref({
  email: "",
  username: "",
  password: "",
});
function sendRegistrationData() {}
</script>

<style scoped></style>
