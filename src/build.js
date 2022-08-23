#!/usr/bin/env node
const esbuild = require('esbuild');
const { stimulusPlugin } = require('esbuild-plugin-stimulus');

esbuild.build({
  plugins: [stimulusPlugin()],
  entryPoints: ['./src/main.ts'],
  bundle: true,
  outfile: './dist/main.js',
}).catch(() => process.exit(1));