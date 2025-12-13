// .eslintrc.js
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: "module"
  },
  plugins: [
    "react",
    "react-hooks",
    "import"
  ],
  rules: {
    "react-hooks/rules-of-hooks": "error",
    // تفعيل القاعدة: هذا يمنع التحذير 'Definition for rule react-hooks/exhaustive-deps was not found'
    "react-hooks/exhaustive-deps": "warn",
    "import/no-extraneous-dependencies": "off"
  },
  settings: {
    react: {
      version: "detect"
    }
  }
};
