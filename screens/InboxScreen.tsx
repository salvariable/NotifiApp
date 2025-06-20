// screens/InboxScreen.tsx

import React from 'react';
import { View, Text, Button, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useNotificationStore } from '../store/notificationStore';
import { Notification, NotificationType } from '../models/notification';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import { getIconForType } from '../utils/getIconForType';
import { getColorForType } from '../utils/getColorForType';
import { getRandomNotificationType } from '../utils/getRandomNotificationType';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Inbox'>;

export default function InboxScreen() {
    const navigation = useNavigation<NavigationProp>();
    const { notifications, addNotification } = useNotificationStore();

    const handleMockAdd = () => {
        const id = Date.now().toString();
        const randomType = getRandomNotificationType();

        addNotification({
            id,
            title: `${randomType.toUpperCase()} Notification`,
            description: `Esta es una notificación de tipo ${randomType}.`,
            createdAt: new Date(),
            type: randomType,
            read: false,
        });
    };

    const renderItem = ({ item }: { item: Notification }) => (
        <TouchableOpacity onPress={() => navigation.navigate('NotificationDetail', { id: item.id })}>
            <View style={{ flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1, borderColor: '#eee' }}>
                <View testID={`color-bar-${item.id}`} style={{ width: 6, height: 60, backgroundColor: getColorForType(item.type) }} />
                <View style={{ padding: 12, flex: 1 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                        <Text style={{ fontSize: 20 }}>{getIconForType(item.type)}</Text>
                        <Text style={{ fontWeight: item.read ? 'normal' : 'bold', flex: 1 }}>
                            {item.title}
                        </Text>
                        {!item.read && (
                            <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: '#2563eb' }} />
                        )}
                    </View>
                    <Text>{item.description}</Text>
                    <Text style={{ fontSize: 10 }}>{item.createdAt.toLocaleString()}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={{ flex: 1 }}>
            <Button title="Agregar notificación mock" onPress={handleMockAdd} />
            <FlatList
                data={notifications}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
            />
        </View>
    );
}
