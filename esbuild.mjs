import * as esbuild from "esbuild";

await esbuild.build({
    entryPoints: ["src/index.ts"],
    bundle: true,
    format: "esm",
    target: "node12",
    outfile: "dist/index.js",
    platform: "node",
    minify: true
});
