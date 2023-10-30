import React from 'react';
import { IInputProps, Input } from 'native-base';
import { useCallback } from 'react';
import { ElementInput, IElementInput } from './ElementInput';
import { TextInput } from 'react-native';
import { COLORS } from '#settings/colors';

export interface IBaseInput extends Omit<IInputProps, 'ref' | 'isInvalid'> {
	refInput?: React.RefObject<TextInput>;
	leftElementInput?: IElementInput;
	rightElementInput?: IElementInput;
}

export const BaseInput: React.FC<IBaseInput> = ({
	refInput,
	leftElementInput,
	rightElementInput,
	...props
}) => {
	const handlerChange = useCallback(
		(value: string) => {
			props?.onChangeText?.(value);
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[props?.onChangeText],
	);

	const BaseLeftElement = leftElementInput ? (
		<ElementInput
			hstackProps={{
				alignItems: 'center',
			}}
			{...leftElementInput}
		>
			{leftElementInput.children}
		</ElementInput>
	) : null;

	const BaseRightElement = rightElementInput ? (
		<ElementInput
			hstackProps={{
				alignItems: 'center',
			}}
			{...rightElementInput}
		>
			{rightElementInput.children}
		</ElementInput>
	) : null;

	return (
		<Input
			placeholderTextColor={COLORS.gray0}
			width={'full'}
			size={'xl'}
			p={3}
			_focus={{
				bg: COLORS.white0,
				borderColor: COLORS.pink500,
			}}
			ref={refInput}
			leftElement={BaseLeftElement}
			rightElement={BaseRightElement}
			onChangeText={handlerChange}
			bg={COLORS.gray100}
			borderColor={COLORS.gray100}
			{...props}
		/>
	);
};
