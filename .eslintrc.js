module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        node: true,
    },
    plugins: ["react"],
    extends: ["eslint:recommended", "plugin:react/recommended"],
    parserOptions: {
        sourceType: "module",
        ecmaVersion: 2018,
    },
    settings: {
        react: {
            version: "detect",
        },
    },
    rules: {
        "react/react-in-jsx-scope": "off",
        "react/prop-types": "off",
        "react/no-unescaped-entities": 0,
    },
};
