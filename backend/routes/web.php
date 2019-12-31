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
use App\Http\Controllers\AdminController;
use App\Http\Requests\AdminRequest;
use App\Admin;
use App\BuyingAdvice;
use App\Http\Requests\BuyingAdviceRequest;
use App\Http\Requests\ReviewRequest;
use App\Review;
use App\City;

Route::get('/test', function(){
    return view('welcome');
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
	$digit = $request->digit;
/*
	$listings = Listing::where(
		'price', '<', 1000 
	)->get();

	return $listings;*/
	$listings = Listing::all();
	foreach($listings as $listing){
		$listing->price = intval($listing->price);
	}
	$newListings = $listings->where('price', '>', 11500);
	$array = array();
	foreach($newListings as $listing){
		array_push($array, $listing->price);
	}
	return $array;
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

//route to logout
Route::get('/logout', 'AuthController@logout');



// ******fetch vehicle parameters data by request ********
Route::post('/get_param', 'VehicleParameters@getParameters');

Route::post('/get_year', 'VehicleParameters@getData');

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

Route::get('/getEmail', function(Request $request){
	if($request->session()->get('key')){
		$user = User::find($request->session()->get('key'));
	return $user->email;
	}
});


// API to fetch all listings for individual user
Route::get('/items_by_userId', 'ListingController@fetchItemsForSeller');

// API to fetch data for individual listing to update it
Route::get('/data_listing', 'ListingController@fetchDataForListing');

Route::post('/update_listing', function(Request $request){
		$id = $request->_id;
    	$listing = Listing::find($id);
    	$images = array();
    	$listing->update($request->all());

		if($request->file('images')){
			$data = $request->file('images');

	        for($i=0; $i<count($data); $i++){
		        $image = new MongoDB\BSON\Binary(file_get_contents($data[$i]), 
			             MongoDB\BSON\Binary::TYPE_GENERIC);
		        array_push($images, $image);
	        }

	        $listing->images = $images;
		} else {
			$listing->images = [];
		}

		$listing->save();
    	
    	return $listing;
});

//delete listing from user account
Route::post('/delete_listing', 'ListingController@deleteListing');



 /************ CMS routes *********/
Route::get('/login_admin', 'AdminController@index');

Route::post('/middleware', ['middleware' => 'admin', function(AdminRequest $request){
	$admin = Admin::where([
    	'username' => $request->username,
    	'password' => $request->password
    ])->get()->first();
    session(['admin' => $admin->_id]);
    
    return redirect('/admin_tools');
}]);

Route::get('/admin_tools', 'AdminController@adminTools');

Route::get('/create_buying_advice', 'AdminController@createBuyingAdvice');

Route::post('/create_advice_handler', function(BuyingAdviceRequest $request){
	    $advice = BuyingAdvice::create($request->all());
	    $advice->admin_id = $request->session()->get('admin');

	    $admin = Admin::find($request->session()->get('admin'));
	    $firstName = $admin->firstName;
	    $lastName = $admin->lastName;
	    $advice->author = $firstName . " " . $lastName;

    	if($request->file('image')){
    		$image = new MongoDB\BSON\Binary(file_get_contents($request->file('image')), 
			         MongoDB\BSON\Binary::TYPE_GENERIC);
    		$advice->image = $image;
    		$advice->save(); 
    	} else {
    		$advice->image = 'no image';
    		$advice->save();
    	}
    	
    	return redirect('/admin_tools');
});

Route::get('/update_buying_advice', 'AdminController@updateBuyingAdvice');

Route::post('/update_advice_handler', function(BuyingAdviceRequest $request){
	$advice = BuyingAdvice::find($request->_id);

	$advice->update($request->all());
	$advice->admin_id = $request->session()->get('admin');

	$admin = Admin::find($request->session()->get('admin'));
	$firstName = $admin->firstName;
	$lastName = $admin->lastName;
	$advice->author = $firstName . " " . $lastName;


	if($request->file('image')){
		$image = new MongoDB\BSON\Binary(file_get_contents($request->file('image')), 
			         MongoDB\BSON\Binary::TYPE_GENERIC);
		$advice->image = $image;
	} else {
		$advice->image = 'no image';
	}
	$advice->save();
	return redirect('/admin_tools');
});

Route::get('/delete_buying_advice', 'AdminController@deleteBuyingAdvice');

Route::get('/create_review', 'AdminController@createReview');

Route::post('create_review_handler', function(ReviewRequest $request){
	$review = Review::create($request->all());
	$review->admin_id = $request->session()->get('admin');

	$admin = Admin::find($request->session()->get('admin'));
	$firstName = $admin->firstName;
	$lastName = $admin->lastName;
	$review->author = $firstName . " " . $lastName;

    if($request->file('image')){
    	$image = new MongoDB\BSON\Binary(file_get_contents($request->file('image')), 
			    MongoDB\BSON\Binary::TYPE_GENERIC);
        $review->image = $image;
        $review->save(); 
    } else {
    	$review->image = 'no image';
    	$review->save();
    }
    	
    return redirect('/admin_tools?params=reviews');
});

Route::get('/update_review', 'AdminController@updateReview');

Route::post('/update_review_handler', function(ReviewRequest $request){
	$review = Review::find($request->_id);

	$review->update($request->all());
	$review->admin_id = $request->session()->get('admin');

	$admin = Admin::find($request->session()->get('admin'));
	$firstName = $admin->firstName;
	$lastName = $admin->lastName;
	$review->author = $firstName . " " . $lastName;


	if($request->file('image')){
		$image = new MongoDB\BSON\Binary(file_get_contents($request->file('image')), 
			         MongoDB\BSON\Binary::TYPE_GENERIC);
		$review->image = $image;
	} else {
		$review->image = 'no image';
	}
	$review->save();
	return redirect('/admin_tools?params=reviews');
});

Route::get('/delete_review', 'AdminController@deleteReview');

Route::get('/logout_admin', 'AdminController@adminLogout');


/******** APIs to fetch buying advices**********/

Route::get('/get_buying_advices', 'AdminController@fetchBuyingAdvices');

Route::get('/fetch_advices_item', 'AdminController@fetchBuyingAdvicesItem');


//API to fetch locations on key up
Route::post('/get_certain_cities', function(Request $request){
	$value = $request->value;
	$value = '^' . $value;

	$cities = City::where([
		'city' => new MongoDB\BSON\Regex($value, "i") 
	])->get();
	return $cities;
});

Route::post('/get_items_by_zipCode', 'ListingController@getItemsByZipCode');

Route::post('/get_all_items', 'ListingController@getAllItems');