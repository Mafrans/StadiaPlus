module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
    webextensions: true,
  },
  extends: ['plugin:vue/essential'],
  plugins: [
    'vue'
  ],
  rules: {
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "func-names": [
        "error",
        "never"
    ],
    "indent": [
        "error",
        4
    ],
    "no-console": [
        "off"
    ],
    "no-use-before-define": [
        "warn"
    ],
    "linebreak-style": [
        "off"
    ]
  }
}
