import {TTag} from './tag.ts';
import {TPagination} from './pagination.ts';
import {SuccessResponse} from './response.ts';

/**
 * Данные о транзакции по счету
 */
export type TAccountTransaction = {
    id: number;
    name: string;
    order: number;
    amount: number;
    created_at: string;
    tags: TTag[];
};

export type TPaginatedAccountTransactions = TPagination & SuccessResponse<TAccountTransaction[]>;
