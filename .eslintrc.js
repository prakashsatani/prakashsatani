const path = require("path"); // eslint-disable-line comma-dangle

const baseExtends = [
    "eslint:recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:promise/recommended",
    "@halight/eslint-config-halight",
    "@halight/eslint-config-halight/recommended",
    "@halight/eslint-config-halight/react",
    "plugin:react-hooks/recommended",
];

const baseRules = {
    "react/no-multi-comp": [
        "error",
        {
            "ignoreStateless": true,
        },
    ],
    "promise/always-return": "off",
    "promise/catch-or-return": [
        "error",
        {
            "allowFinally": true,
        },
    ],
    "proposal/class-property-space-infix-ops": [
        "error",
        "always",
    ],
    "proposal/class-property-semi": [
        "error",
        "always",
    ],
    "proposal/class-property-no-extra-semi": [
        "error",
    ],
    "proposal/class-property-no-semi-spacing": [
        "error",
    ],
    "proposal/class-property-no-dupe-property": [
        "error",
    ],
    "import/no-unresolved": [
        "error",
    ],
    "react-hooks/exhaustive-deps": "error",

    /**
     * plugin:import/recommended rules below.
     */

    // Commented these out as they are causing linting to take way too long.
    // 'import/named': 'error',
    // 'import/namespace': 'error',
    "import/default": "error",
    "import/export": "error",

    // red flags (thus, warnings)
    "import/no-named-as-default": "warn",
    "import/no-named-as-default-member": "warn",
    "import/no-duplicates": "warn",
};

module.exports = {
    "parser": "@babel/eslint-parser",
    "env": {
        "browser": true,
        "es6": true,
    },
    "extends": [
        ...baseExtends,
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly",
        "ATM_BUILD_CONFIG": "readonly",
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true,
        },
        "ecmaVersion": 2018,
        "sourceType": "module",
    },
    "plugins": [
        "react",
        "import",
        "jsx-a11y",
        "promise",
        "proposal",
    ],
    "settings": {
        "react": {
            "createClass": "createReactClass", // Regex for Component Factory to use,
            "pragma": "React",  // Pragma to use, default to "React"
            "version": "detect", // React version. "detect" automatically picks the version you have installed.
        },
        "import/resolver": {
            "webpack": { // lets webpack alias work in imports
                "config": path.resolve("./webpack.config.js"), // eslint-disable-line comma-dangle
            },
        },
        "import/ignore": [
            "@halight/carbon",
        ],
    },
    "rules": {
        ...baseRules,
    },
    "overrides": [
        {
            "files": [
                "*.{ts,tsx}",
            ],
            "parser": "@typescript-eslint/parser",
            "parserOptions": {
                "tsconfigRootDir": __dirname,
                "project": [
                    "./tsconfig.json",
                ],
            },
            "plugins": [
                "react",
                "import",
                "jsx-a11y",
                "proposal",
                "@typescript-eslint",
            ],
            "extends": [
                ...baseExtends,
                "plugin:@typescript-eslint/recommended",
                "plugin:@typescript-eslint/recommended-requiring-type-checking",
                "plugin:@typescript-eslint/strict",
            ],
            "rules": {
                ...baseRules,

                // @typescript-eslint recommends turning these off.
                "import/named": "off",
                "import/namespace": "off",
                "import/default": "off",
                "import/no-named-as-default-member": "off",

                // Not using prop types in typescript.
                "react/require-default-props": "off",

                "@typescript-eslint/no-unused-vars": "error", // reset back to error

                // new @typescript-eslint rules.
                "@typescript-eslint/array-type": [
                    "error",
                    {
                        "default": "generic",
                    },
                ],
                "@typescript-eslint/consistent-indexed-object-style": [
                    "error",
                    "index-signature",
                ],
                "@typescript-eslint/consistent-type-assertions": [
                    "error",
                    {
                        "assertionStyle": "as",
                    },
                ],
                "@typescript-eslint/consistent-type-definitions": [
                    "error",
                    "interface",
                ],
                "@typescript-eslint/consistent-type-exports": [
                    "error",
                ],
                "@typescript-eslint/consistent-type-imports": [
                    "error",
                ],
                "@typescript-eslint/member-delimiter-style": [
                    "error",
                ],
                "@typescript-eslint/no-confusing-non-null-assertion": [
                    "error",
                ],
                "@typescript-eslint/no-duplicate-enum-values": [
                    "error",
                ],
                "@typescript-eslint/no-non-null-asserted-nullish-coalescing": [
                    "error",
                ],
                "@typescript-eslint/prefer-includes": [
                    "error",
                ],
                "@typescript-eslint/prefer-ts-expect-error": [
                    "error",
                ],
                "@typescript-eslint/type-annotation-spacing": [
                    "error",
                ],
            },
        },
        {
            "files": [
                "webpack.config.js",
                "babel.config.js",
                "babel-plugin-macros.config.js",
            ],
            "env": {
                "node": true,
            },
        },
        {
            "files": [
                ".eslintrc.js",
                ".stylelintrc.js",
                "jest.config.js",
            ],
            "env": {
                "node": true,
            },
            "rules": {
                "quotes": [
                    "error",
                    "double",
                ],
                "comma-dangle": [
                    "error",
                    "always",
                ],
            },
        },
    ],
};
