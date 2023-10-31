import { query } from '#api/requests';
import { useAppContext } from '#context/AppContext';
import { CreateTokensResponse, User, UserOrBe } from '#gql/generated/graphql';
import { setTokenPairStorage } from '#settings/storage';
import { authCatchError } from '#utils/catchErrors';
import { decodeToken } from '#utils/decodeToken';
import { useLazyQuery } from '@apollo/client';
import { useCallback, useState } from 'react';

interface IUseAuthProps {
	login: string;
	password: string;
}

interface IUseAuthResponse {
	isLoadAuth: boolean;
	handlerPressAuth: () => Promise<void>;
}

type TUseAuth = (props: IUseAuthProps) => IUseAuthResponse;

export const useAuth: TUseAuth = ({ login, password }) => {
	const [isLoadAuth, setLoadAuth] = useState(false);
	const {
		toast: { setToastState },
		user: { setUserInfo },
		authOptions,
	} = useAppContext();
	const [handlerAuth] = useLazyQuery<{
		createTokens: CreateTokensResponse;
	}>(query.auth);
	const [handlerGetUser] = useLazyQuery<{
		retrieveUser: UserOrBe;
	}>(query.getUser);

	const handlerPressAuth = useCallback(async () => {
		setLoadAuth(true);
		try {
			const { data: dataAuth } = await handlerAuth({
				variables: {
					login,
					password,
				},
			});
			if (dataAuth.createTokens.__typename === 'ErrorWithFields') {
				throw dataAuth.createTokens;
			}
			await setTokenPairStorage(dataAuth.createTokens);
			const { id } = await decodeToken<{ id: string }>(
				dataAuth.createTokens.accessToken,
			);
			const { data: dataUser } = await handlerGetUser({
				variables: {
					id,
				},
			});
			if (dataUser.retrieveUser.__typename === 'BaseError') {
				throw dataUser.retrieveUser.status;
			} else {
				setUserInfo(() => {
					authOptions.onOpen();
					return dataUser.retrieveUser as User;
				});
			}
		} catch (error) {
			setToastState(authCatchError(error));
		} finally {
			setLoadAuth(false);
		}
	}, [
		authOptions,
		handlerAuth,
		handlerGetUser,
		login,
		password,
		setToastState,
		setUserInfo,
	]);
	return { isLoadAuth, handlerPressAuth };
};
