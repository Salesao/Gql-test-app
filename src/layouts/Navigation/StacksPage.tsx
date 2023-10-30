import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {
	TAuthStackParams,
	THomeStackParams,
	TProfileStackParams,
} from './typesNavigation';
import { ERoutes } from '#routes/route';
import { HomePage } from '#pages/HomeStack/HomePage';
import { ProfilePage } from '#pages/ProfileStack/ProfilePage';
import { AuthPage } from '#pages/AuthStack/AuthPage';
import { EAllImages } from '#img/imgsEnum';
import { HStack, Image, Pressable } from 'native-base';
import { COLORS } from '#settings/colors';
import { Platform } from 'react-native';
import { BaseText } from '#UI/BaseText';

const HomeNavigatorStack = createNativeStackNavigator<THomeStackParams>();
const ProfileNavigatorStack = createNativeStackNavigator<TProfileStackParams>();
const AuthNavigatorStack = createNativeStackNavigator<TAuthStackParams>();

export const AuthStack: React.FC = () => {
	return (
		<AuthNavigatorStack.Navigator initialRouteName={ERoutes.AUTH_PAGE}>
			<AuthNavigatorStack.Screen
				name={ERoutes.AUTH_PAGE}
				component={AuthPage}
				options={() => ({
					title: 'Авторизация',
					headerTitleAlign: 'center',
					headerLeft: () => (
						<Pressable>
							<Image
								alt=""
								source={EAllImages.BLACK_ARROW}
								resizeMode="contain"
							/>
						</Pressable>
					),
					headerShadowVisible: false,
				})}
			/>
		</AuthNavigatorStack.Navigator>
	);
};
export const HomeStack: React.FC = () => {
	return (
		<HomeNavigatorStack.Navigator>
			<HomeNavigatorStack.Screen
				name={ERoutes.HOME_PAGE}
				component={HomePage}
				options={{
					title: 'Розыгрышь',
					headerStyle: {
						backgroundColor: 'transparent',
					},
					headerTitleAlign: 'center',
					headerTitleStyle: {
						color: COLORS.white0,
					},
					headerShadowVisible: false,
					headerLeft: () => (
						<Pressable>
							<Image
								alt=""
								source={EAllImages.BLACK_ARROW}
								resizeMode="contain"
								tintColor={COLORS.white0}
							/>
						</Pressable>
					),
					header:
						Platform.OS === 'ios'
							? undefined
							: () => (
									<HStack alignItems={'center'} p={4}>
										<Image
											source={EAllImages.BLACK_ARROW}
											tintColor={COLORS.white0}
											alt=""
										/>
										<BaseText
											fontSize={20}
											fontWeight={'600'}
											color={COLORS.white0}
											flex={1}
											textAlign={'center'}
										>
											Розыгрышь
										</BaseText>
									</HStack>
							  ),
				}}
			/>
		</HomeNavigatorStack.Navigator>
	);
};

export const ProfileStack: React.FC = () => {
	return (
		<ProfileNavigatorStack.Navigator>
			<ProfileNavigatorStack.Screen
				name={ERoutes.PROFILE_PAGE}
				component={ProfilePage}
				options={{
					title: 'Профиль',
					headerTitleAlign: 'center',
				}}
			/>
		</ProfileNavigatorStack.Navigator>
	);
};
