import { createHttpLink } from '@apollo/client/link/http';
import { onError } from '@apollo/client/link/error';
import { BASE_API } from '@env';
import { ApolloClient, ApolloLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { getAccessTokenStorage } from '#settings/storage';

const httpLink = createHttpLink({
	uri: BASE_API,
});

const authLink = setContext(async () => {
	const token = await getAccessTokenStorage();
	return {
		headers: {
			Authorization: token ? `Bearer ${token}` : '',
		},
	};
});

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
	const apolloClient = new ApolloClient({
		link: ApolloLink.from([authLink, errorLink, httpLink]),
		connectToDevTools: false,
		cache: localCache,
		assumeImmutableResults: true,
	});
	return apolloClient;
};
