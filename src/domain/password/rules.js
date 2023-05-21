export const STRONG_PASSWORD_SCORE = 5;

export const RULES = [
  {
    name: "OneLetter",
    regex: /[a-zA-Z]/,
    label: "Has at least one letter",
    color: "bg-red-600",
  },
  {
    name: "UpperAndLower",
    regex: /(?=.*[a-z])(?=.*[A-Z])/,
    label: "Has at least one lower and one upper case letter",
    color: "bg-red-400",
  },
  {
    name: "OneNumber",
    regex: /\d/,
    label: "Has at least one number",
    color: "bg-red-300",
  },
  {
    name: "SpecialSymbol",
    regex: /[^a-zA-Z0-9]/,
    label: "Has at least one special character",
    color: "bg-yellow-400",
  },
  {
    name: "LongerThan4",
    regex: /^.{5,}$/,
    label: "Has length > 4",
    color: "bg-green-200",
  },
  {
    name: "LongerThan8",
    regex: /^.{9,}$/,
    label: "Has length > 8",
    color: "bg-green-300",
  },
  {
    name: "LongerThan12",
    regex: /^.{13,}$/,
    label: "Has length > 12",
    color: "bg-green-400",
  },
];

export const RULE = RULES.reduce((obj, { name }) => {
  obj[name] = name;
  return obj;
}, {});
