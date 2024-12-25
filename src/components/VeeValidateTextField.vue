<template>
  <form @submit.prevent="submit">
    <div :class="$style.container">
      <v-text-field
        v-model="name.value.value"
        :counter="5"
        :error-messages="name.errorMessage.value"
        label="이름"
      ></v-text-field>

      <div :class="$style['button-items']">
        <v-btn type="submit">확인</v-btn>
        <v-btn @click="handleReset">취소</v-btn>
      </div>
    </div>
  </form>
</template>

<script setup>
import { useField, useForm } from 'vee-validate';

const { handleSubmit, handleReset } = useForm({
  validationSchema: {
    name(value) {
      if (value?.length >= 2) return true;

      return '이름을 두 글자 이상 입력해주세요.';
    },
  },
});
const name = useField('name');

const submit = handleSubmit((values) => {
  console.log('VeeValidateTextField.handleSubmit', values);
});
</script>

<style module lang="scss">
.container {
  @apply flex flex-col gap-2;

  .button-items {
    @apply flex gap-4;
  }
}
</style>
