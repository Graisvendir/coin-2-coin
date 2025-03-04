<?php

namespace App\Http\Controllers;

use App\Http\Resources\AccountStatusResource;
use Illuminate\Support\Facades\Auth;

class AccountStatusController extends Controller
{
    /**
     * Запрос статуса пользователя.
     */
    public function accountStatus()
    {
        return AccountStatusResource::make(Auth::user());
    }
}
