import { BaseText } from '#UI/BaseText';
import { COLORS } from '#settings/colors';
import { HStack, VStack } from 'native-base';
import React from 'react';
import { CountBox } from './CountBox';
import { useTimer } from '#hooks/useTimer';
import { useEffectOnce } from '#hooks/useEffectOnce';

interface ITimerPromotion {}

export const TimerPromotion: React.FC<ITimerPromotion> = () => {
	const { startTimer, getTime } = useTimer({
		startTimeSeconds: 70,
		isCountDown: true,
	});
	const { mins, secs } = getTime();

	const mapMins = mins
		.split('')
		.map((min, idx) => <CountBox key={idx} countNumber={+min} />);

	const mapSecs = secs.split('').map((sec, idx) => (
		<CountBox
			key={idx}
			countNumber={+sec}
			color={{
				bg: COLORS.pink500,
				num: COLORS.white0,
			}}
		/>
	));

	useEffectOnce(() => {
		startTimer();
	});
	return (
		<VStack space={4}>
			<BaseText textAlign={'center'} color={COLORS.white0}>
				До начала розыгрыша
			</BaseText>
			<HStack alignSelf={'center'} alignItems={'center'} space={3}>
				<HStack space={1}>{mapMins}</HStack>
				<BaseText fontSize={30} fontWeight={'900'}>
					:
				</BaseText>
				<HStack space={1}>{mapSecs}</HStack>
			</HStack>
		</VStack>
	);
};
