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
        "linebreak-style": ["error", "unix"],
        "react/react-in-jsx-scope": "off",
        // allow jsx syntax in js files (for next.js project)
        "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
        "react/prop-types": "off",
        "react/no-unescaped-entities": 0,
    },
};
