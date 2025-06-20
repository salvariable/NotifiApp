import { NotificationType } from '../../models/notification';
import { getIconForType } from '../getIconForType';

describe('getIconForType', () => {
    it('returns ⚠️ for warning', () => {
        expect(getIconForType(NotificationType.Warning)).toBe('⚠️');
    });

    it('returns ❌ for error', () => {
        expect(getIconForType(NotificationType.Error)).toBe('❌');
    });

    it('returns ✅ for success', () => {
        expect(getIconForType(NotificationType.Success)).toBe('✅');
    });

    it('returns 🛠 for system', () => {
        expect(getIconForType(NotificationType.System)).toBe('🛠');
    });

    it('returns ℹ️ for info', () => {
        expect(getIconForType(NotificationType.Info)).toBe('ℹ️');
    });

    it('returns ℹ️ for unknown type', () => {
        expect(getIconForType('garbage' as NotificationType)).toBe('ℹ️');
    });
});
