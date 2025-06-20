import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import InboxScreen from '../screens/InboxScreen';
import { useNotificationStore } from '../store/notificationStore';

// Creamos el mock antes del test
const mockNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
    const actualNav = jest.requireActual('@react-navigation/native');
    return {
        ...actualNav,
        useNavigation: () => ({
            navigate: mockNavigate,
        }),
    };
});

describe('InboxScreen Navigation', () => {
    beforeEach(() => {
        mockNavigate.mockClear();
        useNotificationStore.setState({ notifications: [] });
    });

    it('navigates to detail screen with correct ID when notification is pressed', () => {
        useNotificationStore.getState().addNotification({
            id: 'abc123',
            title: 'Test Notification',
            description: 'Contenido de prueba',
            createdAt: new Date(),
            type: 'info',
            read: false,
        });

        const { getByText } = render(<InboxScreen />);

        fireEvent.press(getByText('Test Notification'));

        expect(mockNavigate).toHaveBeenCalledWith('NotificationDetail', { id: 'abc123' });
    });
});
