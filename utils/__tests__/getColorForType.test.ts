import { NotificationType } from '../../models/notification';
import { getColorForType } from '../getColorForType';

describe('getColorForType', () => {
    it('returns yellow for warning', () => {
        expect(getColorForType(NotificationType.Warning)).toBe('#facc15');
    });

    it('returns red for error', () => {
        expect(getColorForType(NotificationType.Error)).toBe('#f87171');
    });

    it('returns green for success', () => {
        expect(getColorForType(NotificationType.Success)).toBe('#4ade80');
    });

    it('returns gray for system', () => {
        expect(getColorForType(NotificationType.System)).toBe('#94a3b8');
    });

    it('returns blue for info', () => {
        expect(getColorForType(NotificationType.Info)).toBe('#60a5fa');
    });

    it('returns default blue for unknown type', () => {
        expect(getColorForType('anything' as NotificationType)).toBe('#60a5fa');
    });
});
