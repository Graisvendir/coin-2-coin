<?php

use App\Models\User;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Laravel\Dusk\Browser;

uses(DatabaseMigrations::class);

test('login test', function () {
    $user = User::factory()->create([
        'email' => 'test@email.com',
    ]);

    $this->browse(function (Browser $browser) {
        $browser->visit('/login')
                ->waitForInput('email')
                ->type('email', 'test@email.com')
                ->type('password', 'password')
                ->pressAndWaitFor('Шли')
                ->storeConsoleLog('test')
                ->pause(1000)
                ->screenshot('test')
                ->assertSee('test@email.com');
    });
});
