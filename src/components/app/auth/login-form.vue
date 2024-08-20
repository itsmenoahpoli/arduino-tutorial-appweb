<script lang="ts" setup>
import { FwbInput, FwbButton } from "flowbite-vue";
import { useForm } from "vue-hooks-form";
import { useServices } from "~/composables";
import type { Credentials } from "~/types/auth";

const { useField, handleSubmit } = useForm();
const { authService } = useServices();

const fields = {
  email: useField("email", {
    rule: {
      required: true,
    },
  }),
  password: useField("password", {
    rule: {
      required: true,
    },
  }),
};

const onFormSubmit = handleSubmit(async (formData: any) => {
  return authService.authenticateCredentials(formData as Credentials);
});
</script>

<template>
  <form class="form" @submit.prevent.once="onFormSubmit">
    <div>
      <h1 class="text-2xl font-bold">Log In</h1>
      <p class="text-sm text-gray-600">To access admin dashboard</p>
    </div>

    <div class="form-group">
      <FwbInput
        v-model="fields.email.value"
        :ref="fields.email.ref"
        placeholder="Enter email"
        :class="[
          {
            'error-border': fields.email.error,
          },
        ]"
        autofocus
      />
      <small v-if="fields.email.error" class="form-error-label">Field is required</small>
    </div>

    <div class="form-group">
      <FwbInput
        type="password"
        v-model="fields.password.value"
        :ref="fields.password.ref"
        placeholder="Enter password"
        :class="[
          {
            'error-border': fields.password.error,
          },
        ]"
      />
      <small v-if="fields.password.error" class="form-error-label">Field is required</small>
    </div>

    <RouterLink to="/auth/request-otp" class="text-xs text-right text-blue-700 underline underline-offset-4">Forgot password?</RouterLink>
    <FwbButton color="dark" class="py-3">Log In</FwbButton>
  </form>
</template>

<style lang="scss" scoped></style>
