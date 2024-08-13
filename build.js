import { build } from "esbuild";
import { glob } from "glob";

const sharedConfig = {
  platform: "node",
  target: "node16",
  format: "cjs",
  sourcemap: false,
  loader: {
    ".ts": "ts",
    ".tsx": "tsx",
  },
};

// Helper function to get all entry points excluding test folder
const getEntryPoints = () => {
  return glob.sync("./src/**/*.{ts,tsx}", {
    ignore: ["./src/test/**"],
  });
};

const buildFiles = async () => {
  try {
    const entryPoints = getEntryPoints();

    if (entryPoints.length === 0) {
      console.error("No entry points found.");
      process.exit(1);
    }

    // Build main file
    await build({
      entryPoints,
      outdir: "./dist",
      bundle: false,
      ...sharedConfig,
      outExtension: { ".js": ".cjs" },
    });
  } catch (error) {
    console.error("Build failed:", error);
    process.exit(1);
  }
};

buildFiles();
