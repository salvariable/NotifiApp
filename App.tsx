import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InboxScreen from './screens/InboxScreen.tsx';
import NotificationDetailScreen from './screens/NotificationDetailScreen.tsx';

export type RootStackParamList = {
  Inbox: undefined;
  NotificationDetail: { id: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inbox">
        <Stack.Screen name="Inbox" component={InboxScreen} />
        <Stack.Screen
          name="NotificationDetail"
          component={NotificationDetailScreen}
          options={{ title: 'Detalle' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
