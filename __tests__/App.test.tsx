import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import App from '../App';
import { useNotificationStore } from '../store/notificationStore';
import { NotificationType } from '../models/notification';

describe('App Navigation', () => {
  beforeEach(() => {
    useNotificationStore.setState({ notifications: [] });
  });

  it('renders Inbox screen and navigates to Detail', async () => {
    const { getByText, queryByText } = render(<App />);

    expect(getByText('Agregar notificación mock')).toBeTruthy();

    fireEvent.press(getByText('Agregar notificación mock'));

    await waitFor(() => {
      expect(getByText('Mock Notification')).toBeTruthy();
    });

    fireEvent.press(getByText('Mock Notification'));

    await waitFor(() => {
      expect(getByText('Mock Notification')).toBeTruthy();
      expect(getByText('Esto es una notificación simulada')).toBeTruthy();
    });
  });
});
