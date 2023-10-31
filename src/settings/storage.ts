import { TokenPair } from '#gql/generated/graphql';
import AsyncStorage from '@react-native-async-storage/async-storage';

export enum EStorage {
	ACCESS_TOKEN = '@accessToken',
	REFRESH_TOKEN = '@refreshToken',
}

export const setTokenPairStorage = async ({
	accessToken,
	refreshToken,
}: Omit<TokenPair, '__typename'>) => {
	try {
		await AsyncStorage.setItem(EStorage.ACCESS_TOKEN, accessToken);
		await AsyncStorage.setItem(EStorage.REFRESH_TOKEN, refreshToken);
	} catch (error) {
		return null;
	}
};

export const getAccessTokenStorage = () => {
	return AsyncStorage.getItem(EStorage.ACCESS_TOKEN).catch(() => null);
};

export const getRefreshTokenStorage = () => {
	return AsyncStorage.getItem(EStorage.REFRESH_TOKEN).catch(() => null);
};
