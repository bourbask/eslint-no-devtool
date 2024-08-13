import type { Rule } from "eslint";
import type { Node } from "estree";

const noDevTool: Rule.RuleModule = {
  meta: {
    type: "problem",
    docs: {
      description: "Disallow usage of DevTool component",
      category: "Possible Errors",
      recommended: false,
    },
    fixable: "code",
    schema: [],
  },
  create(context) {
    return {
      JSXElement(node: Node) {
        const element = node as any;

        if (
          element.openingElement.name.type === "JSXIdentifier" &&
          element.openingElement.name.name === "DevTool"
        ) {
          context.report({
            node,
            message: "Avoid using DevTool in production code.",
            fix(fixer) {
              const sourceCode = context.getSourceCode();
              const text = sourceCode.getText(node);

              // Check if the element is already wrapped in JSX comments
              if (
                !text.trim().startsWith("{/*") ||
                !text.trim().endsWith("*/}")
              ) {
                const comment = `{/* ${text} */}`;
                return fixer.replaceText(node, comment);
              }

              // If it's already commented, return null to avoid re-commenting
              return null;
            },
          });
        }
      },
    };
  },
};

export default noDevTool;
