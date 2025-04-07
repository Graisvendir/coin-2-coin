import { DateTime } from './date/date-time.ts';

type TypeGuard<T> = (val: unknown) => T;

export const object = <T extends Record<string, TypeGuard<any>>>(inner: T) => {
    return (val: unknown): { [P in keyof T]: ReturnType<T[P]> } => {
        if (val === null || typeof val !== 'object') throw new Error();

        const out: { [P in keyof T]: ReturnType<T[P]> } = {} as any;

        for (const k in inner) {
            out[k] = inner[k]((val as any)[k]);
        }

        return out;
    };
};

export const array = <T>(inner: TypeGuard<T>) => (val: unknown): T[] => {
    if (!Array.isArray(val)) throw new Error();

    return val.map(inner);
};

export const string: TypeGuard<string> = (val: unknown) => {
    if (typeof val !== 'string') throw new Error();

    return val;
};

export const number: TypeGuard<number> = (val: unknown) => {
    if (typeof val !== 'number') throw new Error();

    return val;
};

export const boolean: TypeGuard<boolean> = (val: unknown) => {
    if (typeof val !== 'boolean') throw new Error();

    return val;
};

export const date: TypeGuard<DateTime> = (val: unknown) => {
    let timestamp;

    if (typeof val === 'number') {
        timestamp = val;
    }

    if (typeof val === 'string') {
        timestamp = Date.parse(val);
    }

    if (!timestamp || isNaN(timestamp)) throw new Error();

    return new DateTime(timestamp);
};

export const nullable = <T>(valType: TypeGuard<T>): TypeGuard<T|null|undefined> => {
    return (val: unknown) => {
        if (val === undefined || val === null) {
            return val;
        }

        return valType(val);
    };
};

export const any = (val: unknown) => {
    return val;
};
