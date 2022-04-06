<template>
  <div class="login">
    <div class="row">
      <div class="col-lg-4 mx-auto shadow rounded p-4 mt-3">
        <h1 class="mt-3 text-center">ورود</h1>
        <form @submit.prevent="doLogin">
          <div class="mb-3">
            <label for="usernameInput" class="form-label">نام کاربری</label>
            <input
              type="text"
              v-model="username"
              class="form-control"
              id="usernameInput"
              :class="{
                'is-invalid': usernameE === true,
                'is-valid': usernameE === false,
              }"
            />
            <div class="invalid-feedback" v-if="usernameE">
              {{ usernameEM }}
            </div>
          </div>
          <div class="mb-3">
            <label for="passwordInput" class="form-label">رمز عبور</label>
            <input
              type="password"
              class="form-control"
              id="passwordInput"
              v-model="password"
              :class="{
                'is-invalid': passwordE === true,
                'is-valid': passwordE === false,
              }"
            />
            <div class="invalid-feedback" v-if="passwordE">
              {{ passwordEM }}
            </div>
          </div>

          <button type="submit" class="btn btn-primary">ارسال</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

export default {
  setup() {
    const username = ref("");
    const password = ref("");
    const usernameE = ref();
    const usernameEM = ref("");
    const passwordE = ref();
    const passwordEM = ref("");
    const store = useStore();
    const router = useRouter();
    function doLogin() {
      const access = ref(true);
      if (username.value.length < 3) {
        access.value = false;
        usernameE.value = true;
        if (username.value.length == 0) {
          usernameEM.value = " لطفا نام کاربری را وارد کنید.";
        } else {
          usernameEM.value = "نام کاربری باید حداقل سه کاراکتر داشته باشد.";
        }
      } else {
        usernameE.value = false;
        usernameEM.value = "";
      }

      if (password.value.length < 6) {
        access.value = false;
        passwordE.value = true;
        if (password.value.length == 0) {
          passwordEM.value = " لطفا رمز عبور را وارد کنید.";
        } else {
          passwordEM.value = "رمز عبور باید حداقل شش کاراکتر داشته باشد.";
        }
      } else {
        passwordE.value = false;
        passwordEM.value = "";
      }
      if (access) {
        store.commit("login", `${username.value}:${password.value}`);
        router.push("/profile");
      }
    }

    return {
      doLogin,
      username,
      password,
      usernameE,
      usernameEM,
      passwordE,
      passwordEM,
    };
  },
};
</script>

<style></style>
