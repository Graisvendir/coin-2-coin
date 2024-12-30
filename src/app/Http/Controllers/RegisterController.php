<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Symfony\Component\HttpFoundation\Response;

class RegisterController extends Controller
{
    /**
     * Тупая-тупая регистрация по email и паролю. Как времянка пойдет.
     * TODO: Потом переделать
     *
     * @param Request $request
     * @return \Illuminate\Contracts\Auth\Authenticatable|\Illuminate\Http\JsonResponse|null
     */
    public function register(RegisterRequest $request)
    {
        $isSaved = User::query()->save([
            $request->all(),
            'name' => $request->getEmail(),
            'email_verified_at' => now(),
            'password' => Hash::make($request->getPassword()),
        ]);

        if ($isSaved) {
            return response()->json([]);
        }

        return response()->json([
            'message' => 'Invalid email or password',
        ], Response::HTTP_UNPROCESSABLE_ENTITY);
    }
}
