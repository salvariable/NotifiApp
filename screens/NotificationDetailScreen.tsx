// screens/NotificationDetailScreen.tsx

import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../App';
import { useNotificationStore } from '../store/notificationStore';

type DetailRouteProp = RouteProp<RootStackParamList, 'NotificationDetail'>;

export default function NotificationDetailScreen() {
    const route = useRoute<DetailRouteProp>();
    const { id } = route.params;
    const { notifications, markAsRead } = useNotificationStore();

    const noti = notifications.find((n) => n.id === id);

    useEffect(() => {
        if (noti && !noti.read) {
            markAsRead(id);
        }
    }, [id]);

    if (!noti) {
        return (
            <View style={{ padding: 16 }}>
                <Text>Notificación no encontrada</Text>
            </View>
        );
    }

    return (
        <View style={{ padding: 16 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{noti.title}</Text>
            <Text>{noti.description}</Text>
            <Text style={{ fontSize: 12, color: 'gray' }}>
                {noti.createdAt.toLocaleString()}
            </Text>
        </View>
    );
}
