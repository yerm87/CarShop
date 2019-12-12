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
use App\Parameters;
use App\Http\Controllers\VehicleParameters;
use App\Listing;
use App\Http\Controllers\ListingController;

Route::get('/test', function(){
    return view('welcome');
});

Route::get('/test2', function(Request $request){
   return $request->session()->forget('key');
});

Route::post('/test3', function(Request $request){
	$file = $request->file('file_id');
	User::create([
		'email' => new MongoDB\BSON\Binary(file_get_contents($file), MongoDB\BSON\Binary::TYPE_GENERIC)
	]);
});

Route::get('/test4', function(){
	/*
	$user = User::find('5de5b1e2d4500000e80050eb');
	$id = $user->_id;
	$picture = base64_encode($user->email->getData());
	return view('welcome', compact('picture'));*/

	$listing = Listing::find('5ded1e6a95170000d6007b25');
	$arrayImages = array();

	foreach($listing->images as $image){
		$image = base64_encode($image);
		array_push($arrayImages, $image);
	}
	return view('welcome', compact('arrayImages'));
});

Route::post('/test5', function(Request $request){
	
	$data = $request->file('images');

	$images = array();

	for($i=0; $i<count($data); $i++){
		$image = new MongoDB\BSON\Binary(file_get_contents($data[$i]), 
			         MongoDB\BSON\Binary::TYPE_GENERIC);
		array_push($images, $image);
	}

	Listing::create([
		'images' => $images
	]);

	return $images;

	//"image"=> new MongoDB\BSON\Binary(file_get_contents($image), MongoDB\BSON\Binary::TYPE_GENERIC)
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

//route to check that email does not exist yet
Route::post('/checkEmails', 'AuthController@checkEmails');

//route to login
Route::post('/auth_user', 'AuthController@login');



// ******fetch vehicle parameters data by request ********
Route::post('/get_param', 'VehicleParameters@getParameters');

Route::post('/get_make', 'VehicleParameters@getData');

Route::post('/get_model', 'VehicleParameters@getModel');

Route::post('/get_bodyStyle', 'VehicleParameters@getData');

Route::post('/get_transmission', 'VehicleParameters@getData');

Route::post('/get_exteriorColor', 'VehicleParameters@getData');

Route::post('/get_interiorColor', 'VehicleParameters@getData');

Route::post('/get_numberOfDoors', 'VehicleParameters@getData');

Route::post('/get_fuelType', 'VehicleParameters@getData');

Route::post('/get_condition', 'VehicleParameters@getData');


//create listing API
Route::post('/create_listing', function(Request $request){
	$images = array();
	$listing;
	if($request->file('images')){
		$data = $request->file('images');

	    for($i=0; $i<count($data); $i++){
		    $image = new MongoDB\BSON\Binary(file_get_contents($data[$i]), 
			         MongoDB\BSON\Binary::TYPE_GENERIC);
		    array_push($images, $image);
	    }
	    $listing = Listing::create($request->all());
	    $listing->images = $images;
	    $listing->save();

	} else {
		$listing = Listing::create($request->all());
		$listing->images = [];
		$listing->save();
	}

	$listing->user_id = $request->session()->get('key');
	$listing->save();
    return 'submitted';
});