<?php

namespace App\Observers;

use App\Models\AccountTransaction;
use App\Models\CashAccount;

class CashAccountObserver
{
    /**
     * Событие ПЕРЕД удалением счета.
     */
    public function deleting(CashAccount $cashAccount): void
    {
        $cashAccount->transactions()->chunk(100, function ($transactions) {
            AccountTransaction::whereIn('id', $transactions->pluck('id'))->delete();
        });
    }
}
