module.exports = {
    extends: [
      'airbnb',
      'prettier',
      'prettier/react',
    ],
    plugins: [
      'prettier',
      'react-hooks',
      'eslint-plugin-prettier',
    ],
    rules: {
        "react/jsx-filename-extension": [1, { "extensions": [".js"] }],
        "prettier/prettier": [
            "error",
            {
                "singleQuote": true,
                "trailingComma": "es5"
            }
        ],
        "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
        "react-hooks/exhaustive-deps": "warn", // Checks effect dependencies
        "import/no-named-as-default": 0
    },
};