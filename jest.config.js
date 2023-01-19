module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  testMatch: ["**/__tests__/*.{j,t}s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
  transformIgnorePatterns: ["node_modules/(?!axios)"],
};
