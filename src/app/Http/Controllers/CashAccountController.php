<?php

namespace App\Http\Controllers;

use App\Http\Requests\AddCashAccountRequest;
use App\Http\Requests\UpdateCashAccountRequest;
use App\Http\Resources\CashAccountResource;
use App\Models\CashAccount;
use App\Models\User;
use Illuminate\Http\Request;

class CashAccountController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(User $user)
    {
        return CashAccountResource::collection($user->cashAccounts);
    }

    /**
     * Show the form for creating a new resource.
     */
//    public function create()
//    {
//        //
//    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(AddCashAccountRequest $request)
    {
        $cashAccount = CashAccount::create($request->validated());

        return CashAccountResource::make($cashAccount);
    }

    /**
     * Display the specified resource.
     */
//    public function show(CashAccount $cashAccount)
//    {
//        return CashAccountResource::make($cashAccount);
//    }

    /**
     * Show the form for editing the specified resource.
     */
//    public function edit(string $id)
//    {
//        //
//    }

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
