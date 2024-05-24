import { MyDate } from './date';

describe('MyDate', () => {
    test('showDate method', () => {
        expect(new MyDate(20, 1, 1990).showDate()).toBe("двадцатое января");
        expect(new MyDate(21, 1, 1990).showDate()).toBe("двадцать первое января");
    });

    test('isFuture', () => {
        expect(new MyDate(20, 5, 2056).isFuture()).toBe(true);
        expect(new MyDate(20, 6, 1990).isFuture()).toBe(false);
    });

    test('isLeapYear', () => {
        expect(new MyDate(20, 6, 1990).isLeapYear()).toBe(false);
        expect(new MyDate(20, 6, 2020).isLeapYear()).toBe(true);
    });

    test('nextDay', () => {
        expect(new MyDate(20, 6, 2020).nextDay()).toBe("21/6/2020");
        expect(new MyDate(31, 1, 2020).nextDay()).toBe("1/2/2020");
        expect(new MyDate(28, 2, 2020).nextDay()).toBe("29/2/2020");
        expect(new MyDate(28, 2, 2019).nextDay()).toBe("1/3/2019");
        expect(new MyDate(31, 12, 2020).nextDay()).toBe("1/1/2021");
    });
});
