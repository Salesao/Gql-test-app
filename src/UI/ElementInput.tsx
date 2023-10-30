import { HStack, IPressableProps, Pressable } from 'native-base';
import { IHStackProps } from 'native-base/lib/typescript/components/primitives/Stack/HStack';
import React from 'react';

export interface IElementInput {
	children: React.ReactNode;
	pressableProps?: IPressableProps;
	hstackProps?: IHStackProps;
}

export const ElementInput: React.FC<IElementInput> = ({
	children,
	pressableProps,
	hstackProps,
}) => {
	return (
		<Pressable {...pressableProps}>
			<HStack space={4} {...hstackProps}>
				{children}
			</HStack>
		</Pressable>
	);
};
