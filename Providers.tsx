import { AppContextProvider } from '#context/AppContext';
import { useFlipper } from '@react-navigation/devtools';
import {
	NavigationContainer,
	useNavigationContainerRef,
} from '@react-navigation/native';
import App from 'App';
import { NativeBaseProvider } from 'native-base';
import React from 'react';
import {
	SafeAreaProvider,
	initialWindowMetrics,
} from 'react-native-safe-area-context';
import themeSettings from '#settings/themeNativeBase';
import { ApolloProvider } from '@apollo/client';
import { createApolloClient } from '#api/settingsAPI';
import { Platform } from 'react-native';

interface IProviders {}

const apolloClient = createApolloClient();

const theme = Platform.select({
	android: themeSettings,
	ios: undefined,
});

export const Providers: React.FC<IProviders> = () => {
	const navigationRef = useNavigationContainerRef();
	useFlipper(navigationRef);
	return (
		<ApolloProvider client={apolloClient}>
			<NativeBaseProvider theme={theme}>
				<SafeAreaProvider initialMetrics={initialWindowMetrics}>
					<NavigationContainer ref={navigationRef}>
						<AppContextProvider>
							<App />
						</AppContextProvider>
					</NavigationContainer>
				</SafeAreaProvider>
			</NativeBaseProvider>
		</ApolloProvider>
	);
};
