<script setup>
import { ref } from "vue";
import { PasswordStrengthChecker } from "@/components";
import eyeIcon from "@/assets/eye.svg";
import crossedEyeIcon from "@/assets/eye-crossed.svg";
import { computed } from "vue";

const input = ref("");
const hidePassword = ref(true);

const togglePasswordIcon = computed(() =>
  hidePassword.value ? crossedEyeIcon : eyeIcon
);
</script>

<template>
  <div class="relative">
    <input
      v-model="input"
      :type="hidePassword ? 'password' : 'text'"
      data-test="password-field"
      class="mb-2 block w-full rounded border border-gray-300 py-2 pl-3 pr-11 text-black shadow-sm transition duration-100 ease-in-out focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
    />
    <img
      :src="togglePasswordIcon"
      @click="hidePassword = !hidePassword"
      alt="toggle password visibility icon"
      class="absolute right-3 top-1/2 w-5 -translate-y-1/2 transform cursor-pointer text-gray-600"
    />
  </div>
  <PasswordStrengthChecker :password="input" />
</template>
