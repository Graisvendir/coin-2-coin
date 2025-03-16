import {number, object, string} from '~/shared/utils';

/**
 * Тег
 */
export const Tag = object({
    id: number,
    name: string,
    order: number,
    color: string,
});

export type TTag = ReturnType<typeof Tag>;
