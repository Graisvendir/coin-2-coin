<?php

namespace App\Http\Controllers;

use App\Http\Requests\AuthRequest;
use App\Http\Resources\AccountStatusResource;
use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class AuthController extends Controller
{
    /**
     * Тупая-тупая авторизация по email и паролю. Как времянка пойдет.
     * TODO: Потом переделать
     *
     * @param AuthRequest $request
     * @return AccountStatusResource|JsonResponse|null
     */
    public function auth(AuthRequest $request)
    {
        $email = $request->validated('email');
        $password = $request->validated('password');
        $attempt = Auth::attempt(['email' => $email, 'password' => $password], true);

        if ($attempt) {
            return AccountStatusResource::make(Auth::user());
        }

        return response()->json([
             'message' => 'Не удалось авторизоваться',
        ], Response::HTTP_UNPROCESSABLE_ENTITY);
    }
}
