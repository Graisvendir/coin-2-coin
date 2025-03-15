<?php

namespace App\Http\Controllers;

use App\Http\Resources\AccountTransactionResource;
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
//    public function store(AddCashAccountRequest $request)
//    {
//        $cashAccount = CashAccount::create($request->validated());
//
//        return CashAccountResource::make($cashAccount);
//    }
//
//    /**
//     * Update the specified resource in storage.
//     */
//    public function update(UpdateCashAccountRequest $request, CashAccount $cashAccount)
//    {
//        $cashAccount->update($request->validated());
//
//        return CashAccountResource::make($cashAccount);
//    }
//
//    /**
//     * Remove the specified resource from storage.
//     */
//    public function destroy(CashAccount $cashAccount)
//    {
//        $cashAccount->delete();
//    }
}
