import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";
import postcss from "rollup-plugin-postcss";

export default {
  input: "src/index.ts",
  output: [
    {
      file: "dist/index.cjs",
      format: "cjs",
      exports: "named",
      sourcemap: true,
    },
    {
      file: "dist/index.esm.js",
      format: "esm",
      sourcemap: true,
    },
    {
      file: "dist/index.umd.js",
      format: "umd",
      name: "Fancy",
      globals: {
        react: "React",
        "react-dom": "ReactDOM",
      },
      sourcemap: true,
      plugins: [terser()],
    },
  ],
  plugins: [
    resolve(),
    commonjs(),
    postcss({
      extract: true,
      modules: {
        auto: (id) => !id.includes("global.css"),
      },
      use: ["sass"],
    }),
    typescript({ tsconfig: "./tsconfig.json" }),
  ],
  external: ["react", "react-dom"],
};
