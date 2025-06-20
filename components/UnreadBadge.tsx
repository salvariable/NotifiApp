import React from 'react';
import { Text } from 'react-native';
import Animated, { ZoomIn } from 'react-native-reanimated';

type Props = {
    count: number;
};

export default function UnreadBadge({ count }: Props) {
    if (count <= 0) return null;

    return (
        <Animated.View
            entering={ZoomIn.duration(300)}
            style={{
                backgroundColor: '#2563eb',
                borderRadius: 12,
                paddingHorizontal: 8,
                paddingVertical: 4,
                marginRight: 8,
            }}
        >
            <Text testID="unread-badge-count" style={{ color: 'white', fontWeight: 'bold' }}>
                {count}
            </Text>
        </Animated.View>
    );
}
