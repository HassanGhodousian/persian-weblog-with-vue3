<template>
  <div class="login">
    <div class="row">
      <div class="col-lg-4 mx-auto shadow rounded p-4 mt-3">
        <h1 class="mt-3 text-center">عضویت</h1>
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

          <div class="mb-3">
            <label for="passwordInput2" class="form-label"
              >تکرار رمز عبور</label
            >
            <input
              type="password"
              class="form-control"
              id="passwordInput2"
              v-model="password2"
              :class="{
                'is-invalid': password2E === true,
                'is-valid': password2E === false,
              }"
            />
            <div class="invalid-feedback" v-if="password2E">
              {{ password2EM }}
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
    const password2 = ref("");
    const usernameE = ref();
    const passwordE = ref();
    const password2E = ref();
    const usernameEM = ref("");
    const passwordEM = ref("");
    const password2EM = ref("");
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

      if (password2.value.length < 6) {
        access.value = false;
        password2E.value = true;
        if (password2.value.length == 0) {
          password2EM.value = " لطفا تکرار رمز عبور را وارد کنید.";
        } else {
          password2EM.value =
            " تکرار رمز عبور باید حداقل شش کاراکتر داشته باشد.";
        }
      } else {
        password2E.value = false;
        password2EM.value = "";
      }

      if (password.value != password2.value) {
        access.value = false;
        password2E.value = true;
        passwordE.value = true;
        passwordEM.value = "رمز عبور یکسان نیست";
      } else if (!password2E.value && !passwordE.value) {
        password2E.value = false;
        password2EM.value = "";
      }

      if (access.value) {
        store.commit("log/login", `${username.value}:${password.value}`);
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
      password2,
      password2E,
      password2EM,
    };
  },
};
</script>

<style></style>
