<template>
  <Teleport to="body">
    <v-dialog class="w-25" v-model="dialog">
      <v-card>
        <v-card-title>Вход</v-card-title>
        <v-card-text>
          <v-form>
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
                  v-model="userData.password"
                  label="Пароль"
                  type="password"
                  required
                ></v-text-field>
              </v-row>
              <v-btn class="w-100" variant="outlined" @click="sendLoginData">
                Войти
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
import { useUserStore } from "@/stores/user";
const userStore = useUserStore();

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
  password: "",
});

function sendLoginData() {
  userStore.loginUser(userData.value).then(() => {
    userData.value = {
      email: "",
      password: "",
    };
    toggleDialog();
  });
}
</script>

<style scoped></style>
