<script setup>
defineProps({
  rules: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <ul class="mt-3">
    <li
      v-for="rule in rules"
      :key="rule.name"
      :data-test-rule-indicator="rule.name"
      class="password-hint__rule text-sm"
      :class="[
        rule.isPassed ? 'text-green-500' : 'text-black/40',
        `password-hint__rule--${rule.isPassed ? 'pass' : 'fail'}`,
      ]"
    >
      {{ rule.label }}
    </li>
  </ul>
</template>
