import { COLORS } from '#settings/colors';
import { ITextProps, Text } from 'native-base';
import React from 'react';
import { Platform } from 'react-native';

interface IBaseText extends ITextProps {
	children: React.ReactNode;
}

const fontFamily = Platform.select({
	android: 'body',
	ios: undefined,
});

export const BaseText: React.FC<IBaseText> = ({ children, ...props }) => {
	return (
		<Text
			fontSize={props.fontSize ?? 16}
			color={COLORS.black0}
			fontWeight={'400'}
			fontFamily={fontFamily}
			{...props}
		>
			{children}
		</Text>
	);
};
