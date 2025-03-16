import { Tag } from '../tag.ts';
import { TPagination } from '../pagination.ts';
import { array, date, nullable, number, object, string } from '~/shared/utils';

/**
 * Данные о транзакции по счету
 */
export const AccountTransaction = object({
    id: number,
    name: string,
    order: nullable(number),
    amount: number,
    created_at: date,
    tags: array(Tag),
});

export type TAccountTransaction = ReturnType<typeof AccountTransaction>;

export type TPaginatedAccountTransactions = TPagination<TAccountTransaction>;
