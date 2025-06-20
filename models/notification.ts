export enum NotificationType {
    System = 'system',
    Warning = 'warning',
    Info = 'info',
    Success = 'success',
    Error = 'error',
}

export interface Notification {
    id: string;
    title: string;
    description: string;
    createdAt: Date;
    type: NotificationType;
    read: boolean;
}
