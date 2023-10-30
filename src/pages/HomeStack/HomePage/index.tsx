import { BaseText } from '#UI/BaseText';
import { useMemoStyle } from '#hooks/useMemoStyle';
import { EAllImages } from '#img/imgsEnum';
import { COLORS } from '#settings/colors';
import { Box, HStack, Image, VStack, View } from 'native-base';
import React from 'react';
import { StyleSheet, useWindowDimensions } from 'react-native';
import { PromotionItem } from './PromotionItem';
import { BaseButton } from '#UI/BaseButton';
import { TimerPromotion } from './TimerPromotion';
import {
	IPageNavigationProps,
	THomeStackParams,
} from '#layouts/Navigation/typesNavigation';

type THomePage = IPageNavigationProps<THomeStackParams, 'HOME_PAGE'>;

export const HomePage: React.FC<THomePage> = () => {
	const promotionsToday = (
		<VStack space={4}>
			<BaseText textAlign={'center'} color={COLORS.white0}>
				Разыгрываем сегодня
			</BaseText>
			<HStack justifyContent={'space-between'} alignItems={'center'}>
				{[1, 2, 3].map(el => (
					<PromotionItem key={el} lengthItems={3} />
				))}
			</HStack>
		</VStack>
	);
	return (
		<Background>
			<VStack flex={1} px={4} pb={4} justifyContent={'space-between'}>
				<Image
					source={EAllImages.ALL_PROMOTION_WHITE}
					alignSelf={'center'}
					alt=""
					resizeMode="contain"
					style={styled.logoPromotion}
				/>
				<VStack space={4} mt={-12}>
					<TimerPromotion />
					{promotionsToday}
				</VStack>
				<BaseButton OnPressButton={() => {}} py={4} bg={COLORS.pink500}>
					<BaseText color={COLORS.white0} fontWeight={'bold'}>
						Участвоать
					</BaseText>
				</BaseButton>
			</VStack>
		</Background>
	);
};

const styled = StyleSheet.create({
	logoPromotion: {
		height: '20%',
		aspectRatio: 1,
	},
});

const Background: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const { height, width } = useWindowDimensions();

	const memoStyle = useMemoStyle(
		() => ({
			transform: [
				{
					rotate: '-58deg',
				},
				{
					translateY: -(height * 0.3),
				},
				{
					translateX: -width,
				},
			],
		}),
		[height],
	);

	return (
		<>
			<View
				style={memoStyle}
				position={'absolute'}
				width={height}
				height={height}
				top={0}
				left={0}
				bottom={0}
				right={0}
			>
				<Box
					bg={COLORS.purple600}
					height={'1/2'}
					width={height ** 2 + width ** 2}
				/>
				<Box
					bg={COLORS.purple100}
					height={'1/2'}
					width={height ** 2 + width ** 2}
				/>
			</View>
			{children}
		</>
	);
};
