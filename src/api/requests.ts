import { gql } from '@apollo/client';

export const query = {
	auth: gql`
		query auth($login: String!, $password: String!) {
			createTokens(login: $login, password: $password) {
				... on TokenPair {
					accessToken
					refreshToken
				}
				... on ErrorWithFields {
					status
					fields
				}
			}
		}
	`,
	getUser: gql`
		query getUser($id: ID!) {
			retrieveUser(id: $id) {
				__typename
				... on User {
					id
					name
					sex
					dateOfBirth
					phone
					email
					address {
						city
					}
					isFollowing
				}
				... on BaseError {
					status
				}
			}
		}
	`,
	getMe: gql`
		query getUserMe {
			getMe {
				... on User {
					id
					name
					sex
					dateOfBirth
					phone
					email
					address {
						city
					}
					isFollowing
				}
				... on BaseError {
					status
				}
			}
		}
	`,
};
