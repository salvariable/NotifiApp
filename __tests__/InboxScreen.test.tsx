import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import InboxScreen from '../screens/InboxScreen';
import { useNotificationStore } from '../store/notificationStore';
import { NotificationType } from '../models/notification';
import { getColorForType } from '../utils/getColorForType';
import { mockNavigate, mockSetOptions } from '../jest.setup';

describe('InboxScreen Navigation', () => {
    beforeEach(() => {
        mockNavigate.mockClear();
        useNotificationStore.setState({ notifications: [] });
    });

    it('renders notification title with bold font and dot when unread', () => {
        useNotificationStore.setState({
            notifications: [{
                id: 'unread-id',
                title: 'No leída',
                description: 'desc',
                createdAt: new Date(),
                read: false,
                type: NotificationType.Info,
            }],
        });

        const { getByText, getByTestId } = render(<InboxScreen />);
        const title = getByText('No leída');
        expect(title.props.style).toMatchObject({ fontWeight: 'bold' });
        expect(getByTestId('dot-unread-id')).toBeTruthy();
    });

    it('renders notification title with normal font when read', () => {
        useNotificationStore.setState({
            notifications: [{
                id: 'read-id',
                title: 'Leída',
                description: 'desc',
                createdAt: new Date(),
                read: true,
                type: NotificationType.Info,
            }],
        });

        const { getByText } = render(<InboxScreen />);
        const title = getByText('Leída');
        expect(title.props.style).toMatchObject({ fontWeight: 'normal' });
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

    it('sets headerRight with unread badge when there are unread notifications', () => {
        useNotificationStore.setState({
            notifications: [
                {
                    id: '1',
                    title: 'test',
                    description: 'test',
                    createdAt: new Date(),
                    read: false,
                    type: NotificationType.Info,
                },
            ],
        });

        render(<InboxScreen />);

        expect(mockSetOptions).toHaveBeenCalledWith(
            expect.objectContaining({
                headerRight: expect.any(Function),
            })
        );

        const headerRightFn = mockSetOptions.mock.calls[0][0].headerRight;
        const headerElement = headerRightFn();
        expect(headerElement.props.count).toBe(1);
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
