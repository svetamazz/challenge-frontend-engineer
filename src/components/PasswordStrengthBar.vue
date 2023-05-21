<script setup>
import { computed } from "vue";
import { RULES, STRONG_PASSWORD_SCORE } from "@/domain/password/rules";
import {
  StrengthOption,
  StrengthOptionLabel,
} from "@/domain/password/strength-options";

const props = defineProps({
  passedRulesCount: {
    type: Number,
    required: true,
  },
});

const strength = computed(() =>
  props.passedRulesCount < STRONG_PASSWORD_SCORE
    ? StrengthOption.Weak
    : StrengthOption.Strong
);

const width = computed(() => (props.passedRulesCount / RULES.length) * 100);

const color = computed(() =>
  props.passedRulesCount > 0
    ? RULES[props.passedRulesCount - 1].color
    : "transparent"
);
</script>

<template>
  <div class="border-grey-30 flex h-2 rounded border">
    <div
      :class="color"
      :style="{ width: `${width}%` }"
      class="flex h-full rounded transition-all duration-500 ease-in-out"
    />
  </div>

  <span data-test="validation-summary" class="mt-1 text-sm">{{
    StrengthOptionLabel[strength]
  }}</span>
</template>
