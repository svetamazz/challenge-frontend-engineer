import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import { PasswordStrengthBar } from "@/components";
import { RULES, STRONG_PASSWORD_SCORE } from "@/domain/password/rules";

const examples = [
  { passedRulesCount: 0, progressBar: 0 },
  { passedRulesCount: RULES.length, progressBar: 100 },
  {
    passedRulesCount: STRONG_PASSWORD_SCORE,
    progressBar: (STRONG_PASSWORD_SCORE / RULES.length) * 100,
  },
];

describe("PasswordStrengthBar", () => {
  const wrapper = mount(PasswordStrengthBar, {
    props: { passedRulesCount: 0 },
  });

  it.each(examples)(
    "should indicate $progressBar% when passed $passedRulesCount rules",
    async ({ passedRulesCount, progressBar }) => {
      await wrapper.setProps({ passedRulesCount });

      expect(
        wrapper.get('[data-test="strength-progress-bar"]').attributes("style")
      ).toBe(`width: ${progressBar}%;`);
    }
  );
});
