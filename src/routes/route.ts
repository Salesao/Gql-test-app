import { FC } from 'react';
import * as Stacks from '#layouts/Navigation/StacksPage';
import { IImageProps } from 'native-base';
import { EAllImages } from '#img/imgsEnum';

export enum ERoutes {
	TABS = 'TABS',
	AUTH_PAGE = 'AUTH_PAGE',
	HOME_STACK = 'HOME_STACK',
	HOME_PAGE = 'HOME_PAGE',
	PROFILE_STACK = 'PROFILE_STACK',
	PROFILE_PAGE = 'PROFILE_PAGE',
}

export type TRouteTabName = ERoutes.HOME_STACK | ERoutes.PROFILE_STACK;

export interface IRoutes {
	id: ERoutes;
	title: string;
	component: FC<any>;
	icon?: IImageProps['source'];
}

export type TRoutesObj<T extends string> = Record<T, IRoutes>;

export const RoutesTab: TRoutesObj<TRouteTabName> = {
	[ERoutes.HOME_STACK]: {
		id: ERoutes.HOME_PAGE,
		title: 'Розыгрышь',
		component: Stacks.HomeStack,
		icon: EAllImages.HOME_ICON,
	},
	[ERoutes.PROFILE_STACK]: {
		id: ERoutes.PROFILE_PAGE,
		title: 'Профиль',
		component: Stacks.ProfileStack,
		icon: EAllImages.PROFILE_ICON,
	},
};
