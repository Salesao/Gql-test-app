import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TTabStackParams } from './typesNavigation';
import { ERoutes, RoutesTab, TRouteTabName } from '#routes/route';
import { Pressable } from 'react-native';
import { Image } from 'native-base';
import { COLORS } from '#settings/colors';

const { Navigator, Screen } = createBottomTabNavigator<TTabStackParams>();

export const NavigationTab: React.FC = () => {
	return (
		<Navigator
			screenOptions={() => ({
				headerShown: false,
			})}
			initialRouteName={ERoutes.HOME_STACK}
		>
			{Object.keys(RoutesTab).map((name: TRouteTabName) => (
				<Screen
					key={RoutesTab[name].id}
					name={name}
					options={() => ({
						title: RoutesTab[name].title,

						headerShadowVisible: false,
						tabBarActiveTintColor: COLORS.pink500,
						headerShown: false,
						tabBarIcon: ({ focused, color }) => (
							<Pressable>
								<Image
									source={RoutesTab[name]?.icon}
									alt=""
									resizeMode="contain"
									tintColor={focused ? color : undefined}
								/>
							</Pressable>
						),
					})}
					component={RoutesTab[name].component}
				/>
			))}
		</Navigator>
	);
};
