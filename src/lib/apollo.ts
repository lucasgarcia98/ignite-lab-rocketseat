import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: "https://api-sa-east-1.graphcms.com/v2/cl4o2is0y07x101z7cqxu511q/master",
    cache: new InMemoryCache()
});