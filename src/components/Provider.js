import React from 'react'
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider
} from "@apollo/client";

const client = new ApolloClient({
    uri: '/api',
    cache: new InMemoryCache()
})
const Provider = ({ children }) => (
    <ApolloProvider client={client}>
        {children}
    </ApolloProvider>
)
export default Provider