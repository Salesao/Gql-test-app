import { BaseButton } from '#UI/BaseButton';
import { BaseInput } from '#UI/BaseInput';
import { BaseText } from '#UI/BaseText';
import { useAppContext } from '#context/AppContext';
import { useMemoStyle } from '#hooks/useMemoStyle';
import { EAllImages } from '#img/imgsEnum';
import { COLORS } from '#settings/colors';
import { Image, Pressable, VStack, useDisclose } from 'native-base';
import React, { useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { query } from '#api/requests';
import { BASE_AUTH } from '#settings/constants';
import {
	BaseError,
	CreateTokensResponse,
	ErrorWithFields,
	User,
	UserOrBe,
} from '#gql/generated/graphql';
import { decode } from 'react-native-pure-jwt';

interface IAuthLogIn {}

export const AuthLogIn: React.FC<IAuthLogIn> = () => {
	const [userName, setUserName] = useState(BASE_AUTH.userName);
	const [password, setPassword] = useState(BASE_AUTH.password);
	const [handlerAuth] = useLazyQuery<{
		createTokens: CreateTokensResponse;
	}>(query.auth);
	const [loadAuth, setLoadAuth] = useState(false);
	const [handlerGetUser] = useLazyQuery<{
		retrieveUser: UserOrBe;
	}>(query.getUser);
	const {
		authOptions,
		toast: { setToastState },
		user: { setUserInfo },
	} = useAppContext();
	const { isOpen: isViewPassword, onToggle: onToggleViewPassword } =
		useDisclose();
	const memoStyleViewOff = useMemoStyle(() => ({
		transform: [{ scale: 0.6 }],
		tintColor: isViewPassword ? COLORS.pink500 : undefined,
	}));

	const handlerPressAuth = async () => {
		setLoadAuth(true);
		try {
			const dataAuth = await handlerAuth({
				variables: {
					login: userName,
					password,
				},
			});
			if (dataAuth.data.createTokens.__typename === 'ErrorWithFields') {
				throw dataAuth.data.createTokens;
			}
			const dataDecode = await decode(
				dataAuth.data.createTokens.accessToken,
				'base64',
				{
					skipValidation: true,
				},
			);
			const idUser = (dataDecode.payload as { payload: { id: string } }).payload
				.id;
			const dataUser = await handlerGetUser({
				variables: {
					id: idUser,
				},
				context: {
					headers: {
						Authorization: `Bearer ${dataAuth.data.createTokens.accessToken}`,
					},
				},
			});
			if (dataUser.data.retrieveUser.__typename === 'BaseError') {
				throw dataUser.data.retrieveUser.status;
			} else {
				setUserInfo(() => {
					authOptions.onOpen();
					return dataUser.data.retrieveUser as User;
				});
			}
		} catch (error) {
			console.log(error);
			const err = error as ErrorWithFields | BaseError;
			switch (err.__typename) {
				case 'BaseError': {
					switch (err.status) {
						case 'NOT_AUTHENTICATED': {
							return setToastState({
								message: 'Пользователь не авторизован',
								variantToast: 'err',
							});
						}
						default: {
							return setToastState({
								message: 'Неизвестная ошибка',
								variantToast: 'err',
							});
						}
					}
				}
				case 'ErrorWithFields': {
					if (err?.fields?.includes('login')) {
						return setToastState({
							message: 'Пользователь не найден',
							variantToast: 'err',
						});
					} else if (err?.fields?.includes('password')) {
						return setToastState({
							message: 'Неверный пароль',
							variantToast: 'err',
						});
					} else {
						return setToastState({
							message: 'Неизвестная ошибка',
							variantToast: 'err',
						});
					}
				}
				default: {
					return setToastState({
						message: 'Неизвестная ошибка',
						variantToast: 'err',
					});
				}
			}
		} finally {
			setLoadAuth(false);
		}
	};

	return (
		<VStack space={7}>
			<BaseText textAlign={'center'}>Войти</BaseText>
			<VStack space={3}>
				<BaseInput
					value={userName}
					onChangeText={setUserName}
					placeholder="Логин или телефон"
				/>
				<BaseInput
					value={password}
					onChangeText={setPassword}
					placeholder="Пароль"
					type={isViewPassword ? 'text' : 'password'}
					caretHidden
					rightElementInput={{
						children: (
							<Pressable onPress={onToggleViewPassword}>
								<Image
									source={EAllImages.VIEW_OFF}
									resizeMode="contain"
									mr={2}
									style={memoStyleViewOff}
									alt=""
								/>
							</Pressable>
						),
					}}
				/>
			</VStack>
			<VStack space={3}>
				<BaseButton
					isLoading={loadAuth}
					OnPressButton={handlerPressAuth}
					bg={COLORS.pink500}
					isLoadingText="Производится вход"
				>
					<BaseText fontWeight={'500'} color={COLORS.white0}>
						Войти
					</BaseText>
				</BaseButton>
				<Pressable>
					<BaseText color={COLORS.gray0} textAlign={'center'}>
						Не помню пароль
					</BaseText>
				</Pressable>
			</VStack>
		</VStack>
	);
};
