/* eslint-env node */

import { ConfigEnv, defineConfig, UserConfigFn } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import babelMacros from 'vite-plugin-babel-macros';

const config: UserConfigFn = ({ command }: ConfigEnv) => {
  const isBuild = command === 'build'
  return {
    cacheDir: '.cache',
    plugins: [
      reactRefresh(),
      babelMacros(),
    ],
    define : isBuild ? {} : {
      global: {
        ErrorUtils: null,
      },
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig(config)
