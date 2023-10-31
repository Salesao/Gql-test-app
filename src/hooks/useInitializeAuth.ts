import { query } from '#api/requests';
import { GetMeResponse } from '#gql/generated/graphql';
import { useLazyQuery } from '@apollo/client';
import { useEffectOnce } from './useEffectOnce';
import { useAppContext } from '#context/AppContext';
import BootSplash from 'react-native-bootsplash';
import { getAccessTokenStorage } from '#settings/storage';
import { authCatchError } from '#utils/catchErrors';

export const useInitializeAuth = () => {
	const {
		user: { setUserInfo },
		authOptions,
		toast: { setToastState },
	} = useAppContext();
	const [handlerGetMe] = useLazyQuery<{
		getMe: GetMeResponse;
	}>(query.getMe);

	useEffectOnce(() => {
		const handlerCheckAuth = async () => {
			try {
				const {
					data: { getMe },
				} = await handlerGetMe();
				if (getMe.__typename === 'User') {
					authOptions.onOpen();
					setUserInfo(getMe);
				} else {
					throw getMe.status;
				}
			} catch (error) {
				const tokenAccess = await getAccessTokenStorage();
				if (tokenAccess) {
					setToastState(authCatchError(error));
					authOptions.onClose();
				}
				console.log(error);
			} finally {
				await BootSplash.hide({ fade: true });
			}
		};
		handlerCheckAuth();
	});
};
