/* eslint-disable quotes */
import { dirname } from "path"
import { fileURLToPath } from "url"
import { FlatCompat } from "@eslint/eslintrc"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  ...compat.config({
    extends: ["next/core-web-vitals"],
    plugins: ["@typescript-eslint"],
    env: {
      node: true,
    },
    rules: {
      semi: ["error", "never"],
      "indent": ["error", 2],
      "no-unused-vars": ["warn"],
      "no-unused-vars": ["error"],
      "no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],
      "no-trailing-spaces": "error",
      "space-infix-ops": "error",
      "comma-spacing": ["error", { "before": false, "after": true }],
      "space-before-blocks": ["error", "always"],
      "space-before-function-paren": ["error", "always"],
      "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 0, "maxBOF": 0 }],
      "curly": ["error", "all"], // Requiere llaves en todas las estructuras de control (if, for, while)
      "eqeqeq": ["error", "always"], // Prohíbe el uso de `==` en lugar de `===`
      "quotes": ["error", "single", { "avoidEscape": true, "allowTemplateLiterals": true }],
      "object-curly-spacing": ["error", "always"], // Requiere espacios dentro de `{ objetos }`
      "array-bracket-spacing": ["error", "never"], // No permite espacios dentro de `[ arreglos ]`
      "space-before-function-paren": ["error", "always"], // Espacio antes de `function ()`
      "key-spacing": ["error", { "beforeColon": false, "afterColon": true }],
      "@typescript-eslint/no-explicit-any": "error", // Prohíbe el uso de `any`
      "@typescript-eslint/no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],
    },
  }),
]

export default eslintConfig
