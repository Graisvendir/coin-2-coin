<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class AuthController extends Controller
{
    public function auth(Request $request)
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
