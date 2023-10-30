import { Pressable } from 'native-base';
import React from 'react';
import { COLORS } from '#settings/colors';
import { BaseText } from './BaseText';

export interface IInfoToast {
	message: string;
	variantToast: keyof typeof EVariantToast | null;
}

export enum EVariantToast {
	err = 'err',
	warn = 'warn',
	success = 'success',
}

export interface IBoxToast extends Pick<IInfoToast, 'message'> {
	closeToast: () => void;
	bg?: string;
	colorText?: string;
}

export const BoxToast: React.FC<IBoxToast> = ({
	message,
	closeToast,
	bg = COLORS.orange500,
	colorText = COLORS.white0,
}) => {
	return (
		<Pressable
			flexDirection={'row'}
			alignItems={'center'}
			bg={bg}
			px={4}
			py={2}
			rounded={'sm'}
			mb={3}
			onPress={closeToast}
			alignSelf={'center'}
		>
			<BaseText textAlign={'center'} fontSize={15} px={3} color={colorText}>
				{message}
			</BaseText>
		</Pressable>
	);
};
