<?php

namespace App\Http\Requests;

use App\Models\CashAccount;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;

class UpdateAccountTransactionRequest extends FormRequest
{

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => ['required', 'string'],
            'amount' => ['required', 'numeric'],
            'created_at' => ['required', 'date'],
            'cash_account_id' => [
                'required',
                'integer',
                Rule::exists(CashAccount::class, 'id')->where(function (\Illuminate\Database\Query\Builder $query) {
                    $query->where('user_id', Auth::user()->id);
                }),
            ],
        ];
    }
}
