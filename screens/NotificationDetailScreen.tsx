import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../App';
import { useNotificationStore } from '../store/notificationStore';
import { getIconForType } from '../utils/getIconForType';
import { getColorForType } from '../utils/getColorForType';

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
        <View style={{ flex: 1, padding: 20, backgroundColor: '#fff' }}>
            <View
                style={{
                    alignSelf: 'center',
                    width: 80,
                    height: 80,
                    borderRadius: 40,
                    backgroundColor: getColorForType(noti.type),
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: 20,
                }}
            >
                <Text style={{ fontSize: 36 }}>{getIconForType(noti.type)}</Text>
            </View>

            <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 12 }}>
                {noti.title}
            </Text>
            <Text style={{ fontSize: 16, marginBottom: 20 }}>{noti.description}</Text>
            <Text style={{ fontSize: 12, color: 'gray' }}>
                {noti.createdAt.toLocaleString()}
            </Text>
        </View>
    );
}
