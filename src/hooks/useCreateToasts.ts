import { useAppContext } from '#context/AppContext';
import { useEffect } from 'react';
import { useMyToast } from './useMyToast';
import { useNetInfo } from '@react-native-community/netinfo';

export const useCreateToasts = () => {
	const {
		authOptions,
		toast: { toastState, setToastState },
	} = useAppContext();
	const { openToast } = useMyToast(toastState);
	const { openToast: openToastConnection, closeToast: closeToastConnection } =
		useMyToast({
			message: 'Нет интернет соединения',
			variantToast: 'err',
		});
	const { isConnected } = useNetInfo();

	useEffect(() => {
		openToast({
			onCloseComplete: () => {
				setToastState({ message: '', variantToast: null });
			},
			placement: authOptions.isOpen ? 'bottom' : 'top',
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [toastState.variantToast]);

	useEffect(() => {
		if (!isConnected) {
			openToastConnection({
				duration: null,
				placement: 'top',
			});
		} else {
			closeToastConnection();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isConnected]);
};
