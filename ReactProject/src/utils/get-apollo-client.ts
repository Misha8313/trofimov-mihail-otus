import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
  createHttpLink,
} from "@apollo/client";

import fetch from "cross-fetch";

export function getApolloClient(): ApolloClient<NormalizedCacheObject> {
  const link = createHttpLink({
    uri: `http://localhost:4000/graphql`,
    fetch,
  });

  const cache = new InMemoryCache();

  const client = new ApolloClient({
    link: link as any,
    cache,
  });
  return client;
}

export default getApolloClient;
