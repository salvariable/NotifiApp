import { NotificationType } from '../models/notification';

export function getIconForType(type: NotificationType): string {
    switch (type) {
        case NotificationType.Warning:
            return '⚠️';
        case NotificationType.Error:
            return '❌';
        case NotificationType.Success:
            return '✅';
        case NotificationType.System:
            return '🛠';
        case NotificationType.Info:
        default:
            return 'ℹ️';
    }
}
