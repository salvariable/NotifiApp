import { create } from 'zustand';
import { Notification } from '../models/notification';


interface NotificationStore {
    notifications: Notification[];
    addNotification: (n: Notification) => void;
    markAsRead: (id: string) => void;
    getUnreadCount: () => number;
}

export const useNotificationStore = create<NotificationStore>((set, get) => ({
    notifications: [],
    addNotification: (n) =>
        set((state) => ({
            notifications: [n, ...state.notifications],
        })),
    markAsRead: (id) =>
        set((state) => ({
            notifications: state.notifications.map((n) =>
                n.id === id ? { ...n, read: true } : n
            ),
        })),
    getUnreadCount: () =>
        get().notifications.filter((n) => !n.read).length,
}));
