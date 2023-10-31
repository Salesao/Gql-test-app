import { decode } from 'react-native-pure-jwt';

type TDecodePayload<T> = { payload: T };
export const decodeToken = async <T extends any>(token: string) => {
	const dataDecode = await decode(token, 'base64', {
		skipValidation: true,
	});
	return (dataDecode.payload as TDecodePayload<T>).payload;
};
