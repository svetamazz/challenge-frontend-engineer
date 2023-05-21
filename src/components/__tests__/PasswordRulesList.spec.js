import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import { PasswordRulesList } from "@/components";
import { RULES } from "@/domain/password/rules";

const rules = RULES.map((rule, index) => ({
  ...rule,
  isPassed: index % 2 === 0,
}));

describe("PasswordRulesList", () => {
  const wrapper = mount(PasswordRulesList, {
    props: {
      rules,
    },
  });

  it.each(rules)(
    "should display proper color for rule $name with validity $isPassed",
    async (rule) => {
      const ruleElement = wrapper.get(
        `[data-test-rule-indicator="${rule.name}"]`
      );

      expect(ruleElement.text()).toBe(rule.label);

      if (rule.isPassed) {
        expect(ruleElement.classes("text-green-500")).toBeTruthy();
        expect(ruleElement.classes("text-black/40")).toBeFalsy();
      } else {
        expect(ruleElement.classes("text-black/40")).toBeTruthy();
        expect(ruleElement.classes("text-green-500")).toBeFalsy();
      }
    }
  );
});
