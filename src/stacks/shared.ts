import { LinkingOptions } from '@react-navigation/native';
import {
	CardStyleInterpolators,
	StackNavigationOptions,
} from '@react-navigation/stack';

interface ScreenOptions {
	navigator: StackNavigationOptions;
	fade: StackNavigationOptions;
}

export const screenOptions: ScreenOptions = {
	navigator: {
		headerShown: false,
		animationEnabled: false,
	},
	fade: {
		cardStyleInterpolator: CardStyleInterpolators.forFadeFromCenter,
	},
};

export type DocumentParamList = {
	section?: string;
	place?: string;
};

export type RootParamList = {
	Document: DocumentParamList;
};

export const linking: LinkingOptions<RootParamList> = {
	prefixes: ['https://docs.stormgate.io'],
	config: {
		screens: {
			Document: '/:group?/:section?',
		},
	},
};
