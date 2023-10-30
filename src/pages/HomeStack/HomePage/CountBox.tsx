import { BaseText } from '#UI/BaseText';
import { COLORS } from '#settings/colors';
import { Box, IBoxProps, ITextProps } from 'native-base';
import React from 'react';

interface ICountBox {
	countNumber: number;
	color?: {
		bg: COLORS;
		num: COLORS;
	};
	boxProps?: IBoxProps;
	countProps?: ITextProps;
}

const BASE_HEIGHT = 100;

export const CountBox: React.FC<ICountBox> = ({
	color = {
		bg: COLORS.white0,
		num: COLORS.black0,
	},
	countNumber,
	boxProps,
	countProps,
}) => {
	return (
		<Box
			bg={color.bg}
			justifyContent={'center'}
			alignItems={'center'}
			borderRadius={'full'}
			height={BASE_HEIGHT}
			style={{
				width: BASE_HEIGHT * 0.75,
			}}
			{...boxProps}
		>
			<BaseText
				fontWeight={'900'}
				fontSize={30}
				color={color.num}
				{...countProps}
			>
				{countNumber}
			</BaseText>
		</Box>
	);
};
