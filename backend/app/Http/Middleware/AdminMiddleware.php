<?php

namespace App\Http\Middleware;

use App\Admin;
use Closure;

class AdminMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $admin = Admin::where([
            'username' => $request->username,
            'password' => $request->password
        ])->get();
        if(count($admin) > 0){
            return $next($request);
        } else {
            return redirect('/login_admin');
        }
    }
}
