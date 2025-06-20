import React from 'react';
import { render } from '@testing-library/react-native';
import UnreadBadge from '../UnreadBadge';

describe('UnreadBadge', () => {
    it('renders nothing when count is 0', () => {
        const { queryByTestId } = render(<UnreadBadge count={0} />);
        expect(queryByTestId('unread-badge-count')).toBeNull();
    });

    it('renders badge with correct count', () => {
        const { getByTestId } = render(<UnreadBadge count={3} />);
        const badge = getByTestId('unread-badge-count');
        expect(badge.props.children).toBe(3);
    });
});
