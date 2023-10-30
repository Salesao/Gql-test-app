import React, { useCallback } from 'react';
import { IToastProps, useToast } from 'native-base';
import { useRef } from 'react';
import { BoxToast, EVariantToast, IBoxToast, IInfoToast } from '#UI/BoxToast';
import { COLORS } from '#settings/colors';

export interface IUseMyToast {
	openToast: (toastProps?: IToastProps) => void;
	closeToast: () => void;
	closeAll: () => void;
}

export const baseVariantToast: Record<
	keyof typeof EVariantToast,
	Pick<IBoxToast, 'bg' | 'colorText'>
> = {
	err: {
		bg: COLORS.orange500,
		colorText: COLORS.white0,
	},
	success: {
		bg: COLORS.purple100,
		colorText: COLORS.white0,
	},
	warn: {
		bg: COLORS.orange500,
		colorText: COLORS.white0,
	},
};

export const useMyToast = ({
	message,
	variantToast,
}: IInfoToast): IUseMyToast => {
	const toast = useToast();
	const toastIdRef = useRef();
	const id = 'toast-' + Math.round(Math.random() * 1000);

	const closeAll = useCallback(() => {
		toast.closeAll();
	}, [toast]);

	const closeToast = useCallback(() => {
		if (toastIdRef.current) {
			toast.close(toastIdRef.current);
		} else {
			toast.closeAll();
		}
	}, [toast]);

	const openToast = useCallback(
		(toastProps?: IToastProps) => {
			if (variantToast && !toast.isActive(id)) {
				toastIdRef.current = toast.show({
					render: () => (
						<BoxToast
							message={message}
							closeToast={closeToast}
							{...baseVariantToast[variantToast]}
						/>
					),
					id,
					...toastProps,
				});
			}
		},
		[closeToast, id, message, toast, variantToast],
	);

	return { closeToast, openToast, closeAll };
};
