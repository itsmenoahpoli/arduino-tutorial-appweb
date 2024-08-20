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
};

const onFormSubmit = handleSubmit(async (formData: any) => {
  return authService.requestOTP(formData as Credentials["email"]);
});
</script>

<template>
  <form class="form" @submit.prevent.once="onFormSubmit">
    <RouterLink :to="{ name: 'auth-login' }" class="text-sm text-blue-700 underline underline-offset-4">Back to login</RouterLink>
    <div>
      <h1 class="text-2xl font-bold">Request OTP (one-time-passcode)</h1>
      <p class="text-sm text-gray-600 mt-3">
        Please enter your account's email address. An email with a link to reset your password will be sent to your account's email address.
      </p>
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

    <FwbButton color="dark" class="py-3">Send & Verify</FwbButton>
  </form>
</template>

<style lang="scss" scoped></style>
