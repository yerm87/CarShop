<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

use App\category;
use App\User;
use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;

Route::get('/test', function(){
    return view('welcome');
});

Route::get('/test2', function(Request $request){
   return $request->session()->forget('key');
});

//route for main page
Route::get('/', 'AuthController@index');

//route to check whether user is authenticated or not
Route::get('/checkAuth', ['middleware'=>'isAuth', function(){
    return response()->json([
        'auth' => true
    ]);
}]);

//route for sell_car page
Route::get('/sell_car', function(){
   return view('sell_page.sell_car');
});

//route for sign-up page
Route::post('/create_user', 'AuthController@store');

Route::post('/checkEmails', function(Request $request){
    $email = $request->emailAddress;
    $users = User::where('email', $email)->get();
    return count($users);
});

Route::post('/auth_user', function(Request $request){
    $email = $request->email;
    $password = $request->password;

    $user = User::where([
        'email' => $email,
        'password' => $password
    ])->get();
    return count($user);
});