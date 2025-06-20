import 'react-native-gesture-handler/jestSetup';

jest.mock('react-native-reanimated', () => {
    return {
        View: require('react-native').View,
        FadeInDown: { duration: () => ({}) },
        ZoomIn: { duration: () => ({}) },
    };
});

export const mockNavigate = jest.fn();
export const mockGoBack = jest.fn();
export const mockSetOptions = jest.fn();

jest.mock('@react-navigation/native', () => {
    const actualNav = jest.requireActual('@react-navigation/native');
    return {
        ...actualNav,
        useNavigation: () => ({
            navigate: mockNavigate,
            goBack: mockGoBack,
            setOptions: mockSetOptions,
        }),
    };
});


