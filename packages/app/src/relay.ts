import {
  RelayNetworkLayer,
  urlMiddleware,
} from 'react-relay-network-modern/es';
import { Environment, RecordSource, Store } from 'relay-runtime';

const VITE_GITHUB_AUTH_TOKEN = import.meta.env.VITE_GITHUB_AUTH_TOKEN;

const network = new RelayNetworkLayer([
  urlMiddleware({
    url: 'https://api.github.com/graphql',
    headers: () => ({
      Authorization: `bearer ${VITE_GITHUB_AUTH_TOKEN}`,
      'Content-Type': 'application/json',
    }),
  }),
]);

function createRelayEnvironment() {
  return new Environment({
    network,
    store: new Store(new RecordSource()),
  });
}

export { createRelayEnvironment };
