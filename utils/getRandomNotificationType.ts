import { NotificationType } from '../models/notification';

const types = Object.values(NotificationType);

export function getRandomNotificationType(): NotificationType {
    const index = Math.floor(Math.random() * types.length);
    return types[index];
}
