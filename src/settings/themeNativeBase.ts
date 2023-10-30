import { extendTheme } from 'native-base';

export default extendTheme({
	fontConfig: {
		SFProDisplay: {
			100: {
				normal: 'SF-Pro-Display-Thin',
			},
			200: {
				normal: 'SF-Pro-Display-Ultralight',
			},
			300: {
				normal: 'SF-Pro-Display-Light',
			},
			400: {
				normal: 'SF-Pro-Display-Regular',
			},
			500: {
				normal: 'SF-Pro-Display-Medium',
			},
			600: {
				normal: 'SF-Pro-Display-Semibold',
			},
			700: {
				normal: 'SF-Pro-Display-Bold',
			},
			800: {
				normal: 'SF-Pro-Display-Black',
			},
			900: {
				normal: 'SF-Pro-Display-Heavy',
			},
		},
	},
	fonts: {
		heading: 'SFProDisplay',
		body: 'SFProDisplay',
		mono: 'SFProDisplay',
	},
});
