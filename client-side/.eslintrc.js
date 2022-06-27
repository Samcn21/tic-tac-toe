module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    parser: "vue-eslint-parser",
    parserOptions: {
        parser: "@typescript-eslint/parser"
    },
    extends: ["plugin:vue/strongly-recommended", "plugin:@typescript-eslint/recommended", "plugin:prettier/recommended"],
    plugins: ["vue", "@typescript-eslint", "prettier"],

    // add your custom rules here
    rules: {
        "import/order": "off",
        "prettier/prettier": [
            "error",
            {
                trailingComma: "none",
                htmlWhitespaceSensitivity: "ignore",
                quoteProps: "consistent",
                endOfLine: "auto",
                printWidth: 170
            }
        ],
        "lines-around-comment": [
            "error",
            {
                beforeBlockComment: true,
                afterBlockComment: false,
                beforeLineComment: true,
                afterLineComment: false,
                allowBlockStart: true,
                allowBlockEnd: true,
                allowObjectStart: true,
                allowObjectEnd: true,
                allowArrayStart: true,
                allowArrayEnd: true
            }
        ],
        "vue/prop-name-casing": ["error", "camelCase"],
        "vue/component-name-in-template-casing": [
            "error",
            "PascalCase",
            {
                registeredComponentsOnly: true,
                ignores: []
            }
        ],
        "vue/attribute-hyphenation": ["error", "never"],
        "vue/no-v-html": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-useless-constructor": ["error"],
        "no-useless-constructor": "off"
    }
};
