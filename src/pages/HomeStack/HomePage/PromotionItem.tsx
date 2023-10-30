import { BaseText } from '#UI/BaseText';
import { EAllImages } from '#img/imgsEnum';
import { COLORS } from '#settings/colors';
import { Circle, Image, VStack, useLayout } from 'native-base';
import React from 'react';

interface IPromotionItem {
	lengthItems: number;
}

const SIZE_BAND = 7;

export const PromotionItem: React.FC<IPromotionItem> = ({ lengthItems }) => {
	const { layout, onLayout } = useLayout();
	return (
		<VStack
			position={'relative'}
			justifyContent={'center'}
			alignItems={'center'}
			borderRadius={'md'}
			bg={COLORS.white0}
			width={`${Math.floor(100 / lengthItems) - lengthItems}%`}
			style={{ aspectRatio: 1 }}
			onLayout={onLayout}
		>
			<Circle
				position={'absolute'}
				top={-SIZE_BAND}
				right={-SIZE_BAND}
				width={SIZE_BAND}
				height={SIZE_BAND}
				bg={COLORS.pink500}
				justifyContent={'center'}
				alignItems={'center'}
			>
				<BaseText
					textAlign={'center'}
					style={{
						transform: [
							{
								translateY: SIZE_BAND / 4,
							},
						],
					}}
					fontSize={SIZE_BAND * 2}
					color={COLORS.white0}
					pb={2}
				>
					10
				</BaseText>
			</Circle>
			<Image
				alt=""
				style={{
					transform: [
						{
							scale: 0.7,
						},
						{
							translateY: (layout.height / 100) * 13,
						},
					],
				}}
				source={EAllImages.MAC_BOOK_ICON}
				resizeMode="contain"
			/>
			<BaseText textAlign={'center'} color={COLORS.white0}>
				Macbook
			</BaseText>
		</VStack>
	);
};
