import { IInfoToast } from '#UI/BoxToast';
import { BaseError, ErrorWithFields } from '#gql/generated/graphql';

export const authCatchError = (
	err: ErrorWithFields | BaseError,
): IInfoToast => {
	switch (err.__typename) {
		case 'BaseError': {
			switch (err.status) {
				case 'NOT_AUTHENTICATED': {
					return {
						message: 'Пользователь не авторизован',
						variantToast: 'err',
					};
				}
				default: {
					return {
						message: 'Неизвестная ошибка',
						variantToast: 'err',
					};
				}
			}
		}
		case 'ErrorWithFields': {
			if (err?.fields?.includes('login')) {
				return {
					message: 'Пользователь не найден',
					variantToast: 'err',
				};
			} else if (err?.fields?.includes('password')) {
				return {
					message: 'Неверный пароль',
					variantToast: 'err',
				};
			} else {
				return {
					message: 'Неизвестная ошибка',
					variantToast: 'err',
				};
			}
		}
		default: {
			return {
				message: 'Неизвестная ошибка',
				variantToast: 'err',
			};
		}
	}
};
