import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type TAuthStackParams = {
	AUTH_PAGE: undefined;
};

export type THomeStackParams = {
	HOME_PAGE: undefined;
};

export type TProfileStackParams = {
	PROFILE_PAGE: undefined;
};

export type TTabStackParams = {
	HOME_STACK: undefined;
	PROFILE_STACK: undefined;
};

export type TAllStack =
	| TAuthStackParams
	| THomeStackParams
	| TProfileStackParams
	| TTabStackParams;

export interface IPageNavigationProps<S extends TAllStack, K extends keyof S> {
	navigation: NativeStackNavigationProp<S, S[K] extends keyof S ? S[K] : K>;
	route: RouteProp<S, S[K] extends keyof S ? S[K] : K>;
}
