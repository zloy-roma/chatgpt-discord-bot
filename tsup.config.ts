import { defineConfig } from 'tsup';

export default defineConfig([
    {
        entry: ['src/index.ts'],
        outDir: 'dist',
        target: 'node18',
        platform: 'node',
        format: ['esm'],
        splitting: false,
        sourcemap: false,
        minify: true,
        shims: true,
        dts: true,
    },
]);
