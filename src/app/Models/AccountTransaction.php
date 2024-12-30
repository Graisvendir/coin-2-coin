<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * 
 *
 * @property int $id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property int $cash_account_id
 * @property float $amount
 * @method static \Illuminate\Database\Eloquent\Builder<static>|AccountTransaction newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|AccountTransaction newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|AccountTransaction query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|AccountTransaction whereAmount($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|AccountTransaction whereCashAccountId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|AccountTransaction whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|AccountTransaction whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|AccountTransaction whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class AccountTransaction extends Model
{
    //
}
