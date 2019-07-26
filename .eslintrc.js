module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
    es6: true,
    jquery: true,
  },
  plugins: ["html"],
  extends: 'standard',
  // extends: 'eslint:recommended',
  rules: {
    "no-debugger": process.env.NODE_ENV === 'production' ? 2 : 0,
    "no-undef": ["off"],
    "no-unused-vars": ["off"],
    "no-extend-native": ["off"],
    "handle-callback-err": ["off"],
    "no-unused-expressions": ["off"],
    "camelcase": ["off"],
    "indent": ["off", 2],
    "no-tabs": ["off"],
    "no-eval": ["off"],
    // quotes: ["off"]
  }
}
