import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import InboxScreen from '../screens/InboxScreen';
import { useNotificationStore } from '../store/notificationStore';
import { NotificationType } from '../models/notification';
import { getColorForType } from '../utils/getColorForType';

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

    it('renders design according to notification type', async () => {
        useNotificationStore.getState().addNotification({
            id: 'icon-test',
            title: 'Tipo Success',
            description: 'Test de ícono',
            createdAt: new Date(),
            type: NotificationType.Success,
            read: false,
        });

        const { getByText, getByTestId } = render(<InboxScreen />);

        await waitFor(() => {
            expect(getByText('✅')).toBeTruthy();
            expect(getByTestId('color-bar-icon-test').props.style.backgroundColor).toBe(getColorForType(NotificationType.Success));
        });
    });

    it('navigates to detail screen with correct ID when notification is pressed', () => {
        useNotificationStore.getState().addNotification({
            id: 'abc123',
            title: 'Test Notification',
            description: 'Contenido de prueba',
            createdAt: new Date(),
            type: NotificationType.Info,
            read: false,
        });

        const { getByText } = render(<InboxScreen />);

        fireEvent.press(getByText('Test Notification'));

        expect(mockNavigate).toHaveBeenCalledWith('NotificationDetail', { id: 'abc123' });
    });
});
