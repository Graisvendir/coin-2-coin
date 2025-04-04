/**
 * Данные о транзакции
 */
export type TSaveAccountTransaction = {
    name: string;
    cash_account_id: number;
    amount: number;
    created_at: string;
    tags?: string[];
};

