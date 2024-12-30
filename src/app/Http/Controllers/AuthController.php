<?php

namespace App\Http\Controllers;

use App\Http\Requests\AuthRequest;
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
     * @return Authenticatable|JsonResponse|null
     */
    public function auth(AuthRequest $request)
    {
        $email = $request->get('email');
        $password = $request->get('password');
        $attempt = Auth::attempt(['email' => $email, 'password' => $password], true);

        if ($attempt) {
            return Auth::user();
        }

        return response()->json([
             'message' => 'Invalid email or password',
        ], Response::HTTP_UNPROCESSABLE_ENTITY);
    }
}
