import { DependencyList, useMemo } from 'react';
import { ImageStyle, StyleProp, TextStyle, ViewStyle } from 'react-native';

export type TStyles = ViewStyle | TextStyle | ImageStyle;

export const useMemoStyle = <
	TStyle extends TStyles,
	TOutput extends StyleProp<TStyle>,
>(
	styleFactory: () => TOutput,
	deps?: DependencyList,
	// eslint-disable-next-line react-hooks/exhaustive-deps
): TOutput => useMemo(styleFactory, deps);
