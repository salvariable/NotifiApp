import { NotificationType } from '../models/notification';

export function getColorForType(type: NotificationType): string {
    switch (type) {
        case NotificationType.Warning:
            return '#facc15';
        case NotificationType.Error:
            return '#f87171';
        case NotificationType.Success:
            return '#4ade80';
        case NotificationType.System:
            return '#94a3b8';
        case NotificationType.Info:
        default:
            return '#60a5fa';
    }
}
