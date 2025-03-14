<?php

namespace Database\Seeders;

use App\Models\AccountTransaction;
use App\Models\CashAccount;
use App\Models\Tag;
use App\Models\User;
use Illuminate\Database\Seeder;

class DevUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(User $user): void
    {
        $cashAccounts = CashAccount::factory()->count(3)->create([
            'user_id' => $user->id,
        ]);
        $tags = Tag::factory()->count(5)->create([
            'user_id' => $user->id,
        ]);

        $cashAccounts->each(function (CashAccount $cashAccount) use ($tags) {
            $tagsForTransaction = fake()->randomElement($tags);

            for ($i = 0; $i < 30; $i++) {
                AccountTransaction::factory()
                    ->hasAttached($tagsForTransaction)
                    ->create([
                        'cash_account_id' => $cashAccount->id,
                    ]);
            }
        });
    }
}
