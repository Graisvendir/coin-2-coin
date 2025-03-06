<?php

use Illuminate\Support\Facades\Route;

Route::post('/login', [\App\Http\Controllers\AuthController::class, 'auth'])->name('login');
Route::post('/register', [\App\Http\Controllers\RegisterController::class, 'register']);

/**
 * Все роуты, требующие авторизации кладем в эту группу.
 */
Route::middleware('auth:sanctum')
    ->group(function () {
        Route::get('/account-status', [\App\Http\Controllers\AccountStatusController::class, 'accountStatus']);

        Route::resources([
            'cash-account' => \App\Http\Controllers\CashAccountController::class,
        ]);
    });
