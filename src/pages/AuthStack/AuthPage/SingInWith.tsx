import { BaseButton } from '#UI/BaseButton';
import { BaseText } from '#UI/BaseText';
import { EAllImages } from '#img/imgsEnum';
import { COLORS } from '#settings/colors';
import { HStack, Image, Pressable, VStack } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';

interface ISingInWith {}

const signInButtons = [
	{
		id: 'vk',
		text: 'Вконтакте',
		icon: EAllImages.VK_ICON,
		bg: COLORS.blue500,
		onPress: () => {},
	},
	{
		id: 'yandex',
		text: 'Яндекс',
		icon: EAllImages.YANDEX_ICON,
		bg: COLORS.orange500,
		onPress: () => {},
	},
];

export const SingInWith: React.FC<ISingInWith> = () => {
	return (
		<VStack space={7} mt={12}>
			<VStack space={3}>
				{signInButtons.map(({ icon, text, onPress, bg, id }) => (
					<BaseButton key={id} py={4} bg={bg} OnPressButton={onPress}>
						<HStack space={2} alignItems={'center'}>
							<Image
								source={icon}
								resizeMode="contain"
								style={styled.imageIcon}
								alt=""
							/>
							<BaseText alignItems={'center'} color={COLORS.white0}>
								Войти через{' '}
								{
									<BaseText fontWeight={'500'} color={COLORS.white0}>
										{text}
									</BaseText>
								}
							</BaseText>
						</HStack>
					</BaseButton>
				))}
			</VStack>
			<Pressable>
				<BaseText textAlign={'center'}>Регистрация</BaseText>
			</Pressable>
		</VStack>
	);
};

const styled = StyleSheet.create({
	imageIcon: {
		width: 20,
		aspectRatio: 1,
	},
});
