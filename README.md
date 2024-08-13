# eslint-plugin-no-devtool

[![npm version](https://img.shields.io/npm/v/eslint-plugin-no-devtool.svg)](https://www.npmjs.com/package/eslint-plugin-no-devtool)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

`eslint-plugin-no-devtool` is an ESLint plugin designed to disallow the use of the `DevTool` component. This can save hours of debugging trying to figure out why a form is underperforming by thinking of everything but the `DevTool` component.

## Installation

To install the plugin, run:

```bash
npm install eslint-plugin-no-devtool --save-dev
```

Or using Bun:

```bash
bun add eslint-plugin-no-devtool
```

## Usage

Add no-devtool to the list of plugins and configure the rule in your ESLint configuration file.

### .eslintrc.json

```json
{
  "plugins": ["no-devtool"],
  "rules": {
    "no-devtool/no-devtool": "error"
  }
}
```

### .eslintrc.js

```javascript
module.exports = {
  plugins: ["no-devtool"],
  rules: {
    "no-devtool/no-devtool": "error",
  },
};
```

## Rule Details

This rule disallows the usage of the DevTool component. If detected, the rule will automatically comment out the DevTool component to prevent performance issues:

### Before

```jsx
import React from "react";
import { DevTool } from "@hookform/devtools";

const MyComponent = () => (
  <div>
    <DevTool />
  </div>
);

export default MyComponent;
```

### After

```jsx
import React from "react";
import { DevTool } from "@hookform/devtools";

const MyComponent = () => <div>{/* <DevTool /> */}</div>;

export default MyComponent;
```

## Options

This rule does not accept any options. It is intended to be used as-is to prevent the usage of DevTool.

## Contributing

Contributions are welcome! If you have suggestions or bug reports, feel free to open an issue or submit a pull request. Please ensure that your code passes the existing tests and linting checks.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Author

Developed by Kevin Bourbasquet.

## Contact

For any questions or inquiries, please reach out at <contact@bourbasquetkev.in>.
