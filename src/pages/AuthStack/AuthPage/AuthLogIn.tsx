import { BaseButton } from '#UI/BaseButton';
import { BaseInput } from '#UI/BaseInput';
import { BaseText } from '#UI/BaseText';
import { useMemoStyle } from '#hooks/useMemoStyle';
import { EAllImages } from '#img/imgsEnum';
import { COLORS } from '#settings/colors';
import { Image, Pressable, VStack, useDisclose } from 'native-base';
import React, { useState } from 'react';
import { BASE_AUTH } from '#settings/constants';
import { useAuth } from '#hooks/useAuth';

interface IAuthLogIn {}

export const AuthLogIn: React.FC<IAuthLogIn> = () => {
	const [userName, setUserName] = useState(BASE_AUTH.userName);
	const [password, setPassword] = useState(BASE_AUTH.password);
	const { isLoadAuth, handlerPressAuth } = useAuth({
		login: userName,
		password,
	});
	const { isOpen: isViewPassword, onToggle: onToggleViewPassword } =
		useDisclose();
	const memoStyleViewOff = useMemoStyle(() => ({
		transform: [{ scale: 0.6 }],
		tintColor: isViewPassword ? COLORS.pink500 : undefined,
	}));

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
					isLoading={isLoadAuth}
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
