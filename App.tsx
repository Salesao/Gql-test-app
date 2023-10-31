import React from 'react';
import { AuthStack } from '#layouts/Navigation/StacksPage';
import { NoNavbarNavigation } from '#layouts/Navigation/NoNavbarNavigation';
import { useAppContext } from '#context/AppContext';
import { useInitializeAuth } from '#hooks/useInitializeAuth';
import { useCreateToasts } from '#hooks/useCreateToasts';

interface IApp {}

export const App: React.FC<IApp> = () => {
	const { authOptions } = useAppContext();

	useInitializeAuth();

	useCreateToasts();

	return !authOptions.isOpen ? <AuthStack /> : <NoNavbarNavigation />;
};

export default App;
