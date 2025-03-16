<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 *
 *
 * @property int $id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property string $name
 * @property int $order
 * @property int $user_id
 * @property-read User $user
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CashAccount newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CashAccount newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CashAccount query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CashAccount whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CashAccount whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CashAccount whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CashAccount whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class CashAccount extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
