/* eslint-env node */

module.exports = /** @type {import('relay-compiler/bin/RelayCompilerMain').Config} */ {
  // ...
  // Configuration options accepted by the `relay-compiler` command-line tool and `babel-plugin-relay`.
  schema: '../../schema.graphql',
  src: './src',
  exclude: ['**/node_modules/**', '**/__mocks__/**', '**/__generated__/**'],
  language: 'typescript',
  customScalars: {
    ID: 'String',
    DateTime: 'String',
    CurrencyCode: 'String',
  },
};
