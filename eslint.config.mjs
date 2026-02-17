import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

export default [
    ...nextCoreWebVitals,
    ...nextTypescript,
    {
        rules: {
            // Allow anonymous default exports in config files
            "import/no-anonymous-default-export": "off",
            // Allow custom fonts in app router layout files
            "@next/next/no-page-custom-font": "off",
        },
    },
];