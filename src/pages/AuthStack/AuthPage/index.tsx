import { EAllImages } from '#img/imgsEnum';
import {
	IPageNavigationProps,
	TAuthStackParams,
} from '#layouts/Navigation/typesNavigation';
import { COLORS } from '#settings/colors';
import { Image, VStack } from 'native-base';
import React from 'react';
import { Keyboard } from 'react-native';
import { SingInWith } from './SingInWith';
import { AuthLogIn } from './AuthLogIn';

type TAuthPage = IPageNavigationProps<TAuthStackParams, 'AUTH_PAGE'>;
const logo = (
	<Image
		source={EAllImages.ALL_PROMOTION_BLACK}
		resizeMode="contain"
		alt=""
		alignSelf={'center'}
		resizeMethod="scale"
		style={{
			transform: [
				{
					scale: 0.6,
				},
			],
		}}
	/>
);

export const AuthPage: React.FC<TAuthPage> = () => {
	return (
		<VStack
			px={4}
			flex={1}
			bg={COLORS.white0}
			// alignItems={'center'}
			onTouchStart={Keyboard.dismiss}
			space={2}
		>
			{logo}
			<AuthLogIn />
			<SingInWith />
		</VStack>
	);
};
