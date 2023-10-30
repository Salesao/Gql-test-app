import { BaseButton } from '#UI/BaseButton';
import { BaseText } from '#UI/BaseText';
import { useAppContext } from '#context/AppContext';
import {
	IPageNavigationProps,
	TProfileStackParams,
} from '#layouts/Navigation/typesNavigation';
import { COLORS } from '#settings/colors';
import { FORMAT_DATES } from '#settings/constants';
import { DateTime } from 'luxon';
import { HStack, ScrollView, VStack } from 'native-base';
import React from 'react';

type TProfilePage = IPageNavigationProps<TProfileStackParams, 'PROFILE_PAGE'>;

enum ESex {
	MALE = 'Мужчина',
	WOMEN = 'Женщина',
}

export const ProfilePage: React.FC<TProfilePage> = () => {
	const {
		authOptions,
		user: { userInfo },
	} = useAppContext();
	const infoUser = [
		{
			value: userInfo?.name,
			label: 'Имя',
			id: 'name',
		},
		{
			value: DateTime.fromISO(userInfo?.dateOfBirth).toFormat(
				FORMAT_DATES.defaultDate,
			),
			label: 'День рождение',
			id: 'birthday',
		},
		{
			value: userInfo?.address?.city,
			label: 'Город',
			id: 'city',
		},
		{
			value: userInfo?.phone,
			label: 'Телефон',
			id: 'phone',
		},
		{
			value: userInfo?.email,
			label: 'Почта',
			id: 'email',
		},
		{
			value: ESex?.[userInfo?.sex],
			label: 'Пол',
			id: 'sex',
		},
	]
		.filter(user => ({ ...user, value: user?.value ?? 'Нет данных' }))
		.map(({ label, value, id }) => (
			<HStack space={2} key={id}>
				<BaseText color={COLORS.pink500}>{label}:</BaseText>
				<BaseText>{value}</BaseText>
			</HStack>
		));
	return (
		<ScrollView
			bg={COLORS.white0}
			flex={1}
			_contentContainerStyle={{
				p: 4,
				flex: 1,
			}}
			showsVerticalScrollIndicator={false}
		>
			<VStack bg={COLORS.white0} space={4}>
				<VStack space={2}>{infoUser}</VStack>
				<BaseButton OnPressButton={authOptions.onClose}>
					<BaseText color={COLORS.white0}>Выйти из профиля</BaseText>
				</BaseButton>
			</VStack>
		</ScrollView>
	);
};
