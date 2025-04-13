/* eslint-disable  @typescript-eslint/no-explicit-any */
import { dayjs } from './dayjs.ts';

export class DateTime {
    private readonly date: dayjs.Dayjs;

    constructor(date?: any) {
        this.date = dayjs(date);
    }

    format(format: string) {
        return this.date.format(format);
    }

    formatDateIfCurrentYear() {
        if (this.date.year() === dayjs().year()) {
            return this.date.format('D MMMM');
        }

        return this.date.format('D MMMM YYYY');
    }

    formatDateTimeIfCurrentYear() {
        if (this.date.year() === dayjs().year()) {
            return this.date.format('HH:mm D MMMM');
        }

        return this.date.format('HH:mm D MMMM YYYY');
    }

    formatTime() {
        return this.date.format('HH:mm');
    }

    toDayJs() {
        return this.date;
    }
}
