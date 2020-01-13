module.exports = {
    extends: "airbnb",
    env: {
        "browser": true
    },
    globals: {
        "SlimSelect": true
    },
    rules: {
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