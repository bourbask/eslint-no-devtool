import { RuleTester } from "eslint";
import rule from "../no-devtool";

import parse from "@typescript-eslint/parser";

const ruleTester = new RuleTester({
  languageOptions: {
    parser: parse,
    ecmaVersion: 2021,
    sourceType: "module",
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
  },
});

ruleTester.run("no-devtool", rule, {
  valid: [
    {
      code: `
        import React from 'react';

        const MyComponent = () => {
          return <div>No DevTool here!</div>;
        };

        export default MyComponent;
      `,
    },
    {
      code: `
        // DevTool component is commented out
        {/* <DevTool control={control} /> */}

      `,
    },
  ],

  invalid: [
    {
      code: `
        import React from 'react';
        import { DevTool } from '@hookform/devtools';

        const MyComponent = () => {
          return <DevTool control={control} />;
        };

        export default MyComponent;
      `,
      errors: [{ message: "Avoid using DevTool in production code." }],
      output: `
        import React from 'react';
        import { DevTool } from '@hookform/devtools';

        const MyComponent = () => {
          return {/* <DevTool control={control} /> */};
        };

        export default MyComponent;
      `,
    },
    {
      code: `
        import React from 'react';
        
        const MyComponent = () => (
          <>
            <div>Some content</div>
            <DevTool control={control} />
          </>
        );

        export default MyComponent;
      `,
      errors: [{ message: "Avoid using DevTool in production code." }],
      output: `
        import React from 'react';
        
        const MyComponent = () => (
          <>
            <div>Some content</div>
            {/* <DevTool control={control} /> */}
          </>
        );

        export default MyComponent;
      `,
    },
  ],
});
