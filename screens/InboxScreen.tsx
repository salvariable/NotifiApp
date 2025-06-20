// screens/InboxScreen.tsx

import React from 'react';
import { View, Text, Button, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useNotificationStore } from '../store/notificationStore';
import { Notification } from '../models/notification';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Inbox'>;

export default function InboxScreen() {
    const navigation = useNavigation<NavigationProp>();
    const { notifications, addNotification } = useNotificationStore();

    const handleMockAdd = () => {
        const id = Date.now().toString();
        addNotification({
            id,
            title: 'Mock Notification',
            description: 'Esto es una notificación simulada',
            createdAt: new Date(),
            type: 'info',
            read: false,
        });
    };

    const renderItem = ({ item }: { item: Notification }) => (
        <TouchableOpacity onPress={() => navigation.navigate('NotificationDetail', { id: item.id })}>
            <View style={{ padding: 12, borderBottomWidth: 1 }}>
                <Text style={{ fontWeight: item.read ? 'normal' : 'bold' }}>{item.title}</Text>
                <Text>{item.description}</Text>
                <Text style={{ fontSize: 10 }}>{item.createdAt.toLocaleString()}</Text>
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
