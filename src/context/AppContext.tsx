import React, { useContext, useState } from 'react';
import { useDisclose } from 'native-base';
import { createContext } from 'react';
import { IInfoToast } from '#UI/BoxToast';
import { User } from '#gql/generated/graphql';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface IAuthContext {
	authOptions: {
		isOpen: boolean;
		onOpen: () => void;
		onClose: () => void;
		onToggle: () => void;
	};
	toast: {
		toastState: IInfoToast;
		setToastState: React.Dispatch<React.SetStateAction<IInfoToast>>;
	};
	user: {
		userInfo: User | null;
		setUserInfo: React.Dispatch<React.SetStateAction<User | null>>;
	};
}

const AppContext = createContext<IAuthContext>({} as IAuthContext);

export const useAppContext = () => useContext(AppContext);

export const AppContextProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const authOptions = useDisclose(false);
	const [toastState, setToastState] = useState<
		IAuthContext['toast']['toastState']
	>({
		message: '',
		variantToast: null,
	});
	const [userInfo, setUserInfo] =
		useState<IAuthContext['user']['userInfo']>(null);

	const handlerLogOut = async () => {
		await AsyncStorage.clear();
		authOptions.onClose();
		setUserInfo(null);
	};

	return (
		<AppContext.Provider
			value={{
				authOptions: { ...authOptions, onClose: handlerLogOut },
				toast: {
					toastState,
					setToastState,
				},
				user: {
					userInfo,
					setUserInfo,
				},
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
