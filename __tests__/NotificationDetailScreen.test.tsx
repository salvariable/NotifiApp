import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import { useNotificationStore } from '../store/notificationStore';
import { NotificationType } from '../models/notification';
import { NavigationContainer } from '@react-navigation/native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../App';
import NotificationDetailScreen from '../screens/NotificationDetailScreen';

type DetailRouteProp = RouteProp<RootStackParamList, 'NotificationDetail'>;

jest.mock('@react-navigation/native', () => {
    const actualNav = jest.requireActual('@react-navigation/native');
    return {
        ...actualNav,
        useRoute: () => ({
            params: { id: '1' },
        }),
    };
});

describe('NotificationDetailScreen', () => {
    beforeEach(() => {
        useNotificationStore.setState({ notifications: [] });
    });

    it('renders notification details and marks as read', async () => {
        const add = useNotificationStore.getState().addNotification;

        add({
            id: '1',
            title: 'Detalle',
            description: 'Descripción completa',
            createdAt: new Date('2023-01-01T12:00:00Z'),
            type: NotificationType.Info,
            read: false,
        });

        const { getByText } = render(
            <NavigationContainer>
                <NotificationDetailScreen />
            </NavigationContainer>
        );

        await waitFor(() => {
            expect(getByText('Detalle')).toBeTruthy();
            expect(getByText('Descripción completa')).toBeTruthy();
        });

        const noti = useNotificationStore.getState().notifications.find((n) => n.id === '1');
        expect(noti?.read).toBe(true);
    });

    it('shows "not found" message if notification does not exist', () => {

        jest.mock('@react-navigation/native', () => ({
            useRoute: () => ({ params: { id: 'non-existent' } }),
        }));

        const { getByText } = render(
            <NavigationContainer>
                <NotificationDetailScreen />
            </NavigationContainer>
        );

        expect(getByText('Notificación no encontrada')).toBeTruthy();
    });
});
