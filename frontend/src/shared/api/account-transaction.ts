import {TTag} from './tag.ts';

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

