import {any, array, object, string} from '~/shared/utils';

export const Pagination = object({
    links: object({
        next: string,
    }),
    data: array(any),
});

export type TPagination<T> = ReturnType<typeof Pagination> & {data: T};
