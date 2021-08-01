import React, { Suspense } from 'react'
import './App.css'
import graphql from 'babel-plugin-relay/macro';
import { loadQuery, PreloadedQuery, RelayEnvironmentProvider, usePreloadedQuery } from 'react-relay';
import { createRelayEnvironment } from './relay';
import { AppRepositoryNameQuery } from './__generated__/AppRepositoryNameQuery.graphql';


const RepositoryNameQuery = graphql`
  query AppRepositoryNameQuery {
    repository(owner: "facebook", name: "relay") {
      name
    }
  }
`;

const preloadedQuery = loadQuery<AppRepositoryNameQuery>(createRelayEnvironment(), RepositoryNameQuery, {});

type AppProps = {
  preloadedQuery: PreloadedQuery<AppRepositoryNameQuery>
}

function App({ preloadedQuery }: AppProps) {
  const data = usePreloadedQuery(RepositoryNameQuery, preloadedQuery)

  return (
    <div className="App">
      <header className="App-header">
        <p>{data.repository?.name}</p>
      </header>
    </div>
  )
}

function AppRoot() {
  return (
    <RelayEnvironmentProvider environment={createRelayEnvironment()}>
      <Suspense fallback={'Loading...'}>
        <App preloadedQuery={preloadedQuery} />
      </Suspense>
    </RelayEnvironmentProvider>
  );
}

export default AppRoot;

