<?php

use Illuminate\Support\Facades\Route;

Route::post('/login', [\App\Http\Controllers\AuthController::class, 'auth']);
Route::post('/register', [\App\Http\Controllers\RegisterController::class, 'register']);

/**
 * Все роуты, требующие авторизации кладем в эту группу.
 */
Route::middleware('auth:sanctum')
    ->group(function () {
        Route::get('/account-status', [\App\Http\Controllers\AccountStatusController::class, 'accountStatus']);
        Route::post('/logout', [\App\Http\Controllers\AuthController::class, 'logout']);

        Route::resources([
            'cash-account' => \App\Http\Controllers\CashAccountController::class,
            'tag' => \App\Http\Controllers\TagController::class,
            'account-transaction' => \App\Http\Controllers\AccountTransactionController::class,
        ]);
    });
