import { HttpLink } from '@apollo/client/link/http';
import { onError } from '@apollo/client/link/error';
import { BASE_API } from '@env';
import { ApolloClient, ApolloLink, InMemoryCache } from '@apollo/client';

export const createHttpLink = () => {
	return new HttpLink({
		uri: BASE_API,
	});
};

export const errorLink = onError(
	({ graphQLErrors, networkError, response, operation }) => {
		if (graphQLErrors) {
			for (const error of graphQLErrors) {
				console.error(
					`[GraphQL error]: Message: ${error.message}, Location: ${error.locations}, Path: ${error.path}`,
					operation,
					response,
				);
			}
		}
		if (networkError) {
			console.error(`[Network error]: ${networkError}`, operation, response);
		}
	},
);

export const localCache = new InMemoryCache();

export const createApolloClient = () => {
	const httpLink = createHttpLink();
	const apolloClient = new ApolloClient({
		link: ApolloLink.from([errorLink, httpLink]),
		connectToDevTools: false,
		cache: localCache,
		assumeImmutableResults: true,
	});
	return apolloClient;
};
