/* eslint-env node */

import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import babelMacros from 'vite-plugin-babel-macros';

// https://vitejs.dev/config/
export default defineConfig({
  cacheDir: '.cache',
  plugins: [
    reactRefresh(),
    babelMacros(),
  ],
})
