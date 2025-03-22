<?php

namespace App\Http\Controllers;

use App\Http\Requests\AddAccountTransactionRequest;
use App\Http\Requests\UpdateAccountTransactionRequest;
use App\Http\Resources\AccountTransactionResource;
use App\Models\AccountTransaction;
use Illuminate\Support\Facades\Auth;

class AccountTransactionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $transactions = Auth::user()->accountTransactions()
            ->with(['tags'])
            ->orderBy('created_at', 'desc')
            ->paginate();

        return AccountTransactionResource::collection($transactions);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(AddAccountTransactionRequest $request)
    {
        $cashAccount = AccountTransaction::create([
            ...$request->validated(),
        ]);

        return AccountTransactionResource::make($cashAccount);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateAccountTransactionRequest $request, AccountTransaction $accountTransaction)
    {
        $accountTransaction->update($request->validated());

        return AccountTransactionResource::make($accountTransaction);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(AccountTransaction $accountTransaction)
    {
        $accountTransaction->delete();
    }
}
