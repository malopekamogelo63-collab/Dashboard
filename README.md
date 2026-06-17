# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
# Mock Rewards Management Dashboard 🚀

A React + TypeScript tracking system built to manage and audit user reward distributions, catalog inventories, and stock health thresholds.

---

## 📋 Day 3 Business Rules Documentation

The dashboard translates raw inventory stock data into operational insights by applying explicit business calculations. The core classification metrics are defined below:

### 1. Reward Health Rules
The systemic status of any active reward is calculated dynamically based on its inventory depth relative to safety margins:

| Inventory Condition | System Status Code | UI Indicator / Badge | Operational Meaning |
| :--- | :--- | :--- | :--- |
| $\text{Current Stock} == 0$ | `out_of_stock` | 🔴 Out of Stock | Item is completely depleted. Requires immediate warehouse replenishment or removal from the public catalog. |
| $\text{Current Stock} \le \text{Min Stock Threshold}$ | `low_stock` | 🟠 Low Stock | Item inventory has dipped into safety buffers. Procuring or re-ordering stock is highly recommended. |
| $\text{Current Stock} > \text{Min Stock Threshold}$ | `healthy` | 🟢 Healthy | Stock levels are sufficient to safely fulfill standard user demand. No management action required. |

### 2. Operational Workflows & Controls
* **Real-Time Data Mapping:** The `Analytics` component dynamically resolves raw relational data by looking up the unique code identifier (`rewardId`) in the stock database and mapping it to its human-readable title string in the main Catalog index.
* **Proactive Inventory Risk Scopes:** The dashboard's *Critical Stock Alerts* metric card counts the combined total of all `low_stock` and `out_of_stock` records to isolate items requiring attention at a single glance.
* **Dynamic Client-Side Filtering:** Interactive components use live local states to filter datasets instantaneously by keyword matching against item names or explicitly grouping items by their computed health statuses.