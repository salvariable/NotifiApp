import { NotificationType } from "../../models/notification";
import { getRandomNotificationType } from "../getRandomNotificationType";


describe('getRandomNotificationType', () => {
    it('returns a valid NotificationType', () => {
        const type = getRandomNotificationType();
        expect(Object.values(NotificationType)).toContain(type);
    });

    it('returns all types over many calls', () => {
        const found = new Set();
        for (let i = 0; i < 100; i++) {
            found.add(getRandomNotificationType());
        }
        Object.values(NotificationType).forEach((type) => {
            expect(found.has(type)).toBe(true);
        });
    });
});
