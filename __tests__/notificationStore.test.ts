import { useNotificationStore } from '../store/notificationStore';
import { NotificationType } from '../models/notification';

describe('Notification Store', () => {
    beforeEach(() => {
        useNotificationStore.setState({ notifications: [] });
    });

    it('adds a notification to the store', () => {
        useNotificationStore.getState().addNotification({
            id: '1',
            title: 'Prueba',
            description: 'Esto es una prueba',
            createdAt: new Date(),
            type: NotificationType.Info,
            read: false,
        });

        const notis = useNotificationStore.getState().notifications;
        expect(notis).toHaveLength(1);
        expect(notis[0].title).toBe('Prueba');
    });

    it('marks a notification as read', () => {
        const { addNotification, markAsRead } = useNotificationStore.getState();

        addNotification({
            id: '1',
            title: 'No leída',
            description: '...',
            createdAt: new Date(),
            type: NotificationType.Warning,
            read: false,
        });

        markAsRead('1');
        const noti = useNotificationStore.getState().notifications[0];
        expect(noti.read).toBe(true);
    });

    it('returns the correct unread count', () => {
        const { addNotification, getUnreadCount } = useNotificationStore.getState();

        addNotification({ id: '1', title: '', description: '', createdAt: new Date(), type: NotificationType.Info, read: false });
        addNotification({ id: '2', title: '', description: '', createdAt: new Date(), type: NotificationType.Info, read: true });

        expect(getUnreadCount()).toBe(1);
    });
});
