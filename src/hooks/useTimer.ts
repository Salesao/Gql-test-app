import { useCallback, useRef, useState } from 'react';

export interface IObjTimer {
	hrs: string;
	mins: string;
	secs: string;
}

export interface IUseTimer {
	time: number;
	isActiveTimer: boolean;
	setIsActiveTimer: React.Dispatch<React.SetStateAction<boolean>>;
	resetTimer: (callback?: () => void) => void;
	startTimer: (callback?: (time: number) => void) => void;
	stopTimer: (callback?: () => void) => void;
	toggleTimer: (callback?: () => void | ((time: number) => void)) => void;
	getTime: () => IObjTimer;
}

export interface IUseTimerProps {
	startTimeSeconds?: number;
	isCountDown?: boolean;
	completeTimer?: () => void;
}

export const calcTimer = (timer: number) => {
	const hrs = String(parseInt(String(timer / 3600), 10)).padStart(2, '0');
	const mins = String(parseInt(String(timer / 60), 10)).padStart(2, '0');
	const secs = String(parseInt(String(timer % 60), 10)).padStart(2, '0');
	return { hrs, mins, secs };
};

type TUseTimer = (props?: IUseTimerProps) => IUseTimer;

export const useTimer: TUseTimer = ({
	startTimeSeconds,
	isCountDown = false,
	completeTimer,
}) => {
	const [time, setTime] = useState(startTimeSeconds || 0);
	const [isActiveTimer, setIsActiveTimer] = useState(false);

	const intervalRef = useRef<null | ReturnType<typeof setTimeout>>(null);

	const resetTimer = useCallback(
		(callback?: () => void) => {
			intervalRef.current && clearInterval(intervalRef.current);
			setTime(startTimeSeconds || 0);
			setIsActiveTimer(false);
			if (typeof callback === 'function') {
				callback();
			}
		},
		[startTimeSeconds],
	);

	const startTimer = useCallback(
		(callback?: (time: number) => void) => {
			if (!isActiveTimer) {
				setIsActiveTimer(true);
				intervalRef.current = setInterval(() => {
					setTime(prev => {
						let newTime = isCountDown ? prev - 1 : prev + 1;
						if (isCountDown && newTime < 0) {
							newTime = 0;
							intervalRef.current && clearInterval(intervalRef.current);
							setIsActiveTimer(false);
							completeTimer?.();
						}
						if (typeof callback === 'function') {
							callback(newTime);
						}
						return newTime;
					});
				}, 1000);
			}
		},
		[completeTimer, isActiveTimer, isCountDown],
	);

	const stopTimer = useCallback(
		(callback?: () => void) => {
			if (isActiveTimer && intervalRef.current) {
				clearInterval(intervalRef.current);
				setIsActiveTimer(false);
				if (typeof callback === 'function') {
					callback();
				}
			}
		},
		[isActiveTimer],
	);

	const toggleTimer = useCallback(
		(callback?: () => void | ((time: number) => void)) => {
			if (isActiveTimer) {
				stopTimer(callback);
			} else {
				startTimer(callback);
			}
		},
		[isActiveTimer, startTimer, stopTimer],
	);

	const getTime = useCallback(() => calcTimer(time), [time]);

	return {
		time,
		isActiveTimer,
		setIsActiveTimer,
		startTimer,
		stopTimer,
		toggleTimer,
		resetTimer,
		getTime,
	};
};
