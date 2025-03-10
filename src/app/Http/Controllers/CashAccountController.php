<?php

namespace App\Http\Controllers;

use App\Http\Requests\AddCashAccountRequest;
use App\Http\Requests\UpdateCashAccountRequest;
use App\Http\Resources\CashAccountResource;
use App\Models\CashAccount;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CashAccountController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        return CashAccountResource::collection(Auth::user()->cashAccounts);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(AddCashAccountRequest $request)
    {
        $cashAccount = CashAccount::create($request->validated());

        return CashAccountResource::make($cashAccount);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCashAccountRequest $request, CashAccount $cashAccount)
    {
        $cashAccount->update($request->validated());

        return CashAccountResource::make($cashAccount);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(CashAccount $cashAccount)
    {
        $cashAccount->delete();
    }
}
