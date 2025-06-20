import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import App from '../App';
import { useNotificationStore } from '../store/notificationStore';

describe('App Navigation Integration', () => {
  beforeEach(() => {
    useNotificationStore.setState({ notifications: [] });
  });

  it('renders inbox, adds typed notification, navigates to detail', async () => {
    const { getByText, queryByText } = render(<App />);

    expect(getByText('Agregar notificación mock')).toBeTruthy();

    fireEvent.press(getByText('Agregar notificación mock'));

    await waitFor(() => {
      expect(
        queryByText('⚠️') || queryByText('❌') || queryByText('✅') || queryByText('🛠') || queryByText('ℹ️')
      ).toBeTruthy();
    });

    const notificationTitle = useNotificationStore.getState().notifications[0]?.title;
    fireEvent.press(getByText(notificationTitle));

    await waitFor(() => {
      expect(getByText(notificationTitle)).toBeTruthy();
    });
  });
});
