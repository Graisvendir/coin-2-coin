<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Illuminate\Http\Response;

class RequestIdContext
{
    public function handle(Request $request, \Closure $next): Response
    {
        \Context::add('requestId', $request->header('X-Request-Id'));

        return $next($request);
    }
}
