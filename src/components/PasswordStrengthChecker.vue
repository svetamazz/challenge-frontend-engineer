<script setup>
import { computed } from "vue";
import { PasswordStrengthBar, PasswordRulesList } from "@/components";
import { RULES } from "@/domain/password/rules";

const props = defineProps({
  password: {
    type: String,
    required: true,
  },
});

const validatedRules = computed(() =>
  RULES.map(({ regex, ...rule }) => ({
    isPassed: regex.test(props.password),
    ...rule,
  }))
);

const passedRulesCount = computed(
  () => validatedRules.value.filter((rule) => rule.isPassed).length
);
</script>

<template>
  <PasswordStrengthBar :passedRulesCount="passedRulesCount" />
  <PasswordRulesList :rules="validatedRules" />
</template>
