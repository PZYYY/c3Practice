// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    // 'plugin:vue/essential', 
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  rules: {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // 取消未定义报错
    'no-undef': 'off',
    "eqeqeq": 0, // 必须使用全等
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during dev  elopment
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    "no-tabs": "off"
  }
}
