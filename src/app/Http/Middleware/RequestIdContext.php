<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;

class RequestIdContext
{
    public function handle(Request $request, \Closure $next)
    {
        \Context::add('requestId', $request->header('X-Request-Id'));

        return $next($request);
    }
}
