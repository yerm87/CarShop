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
use App\Http\Controllers\MessageController;
use App\Message;
use App\Http\Controllers\AppNavigationController;

Route::get('/test', function(){
    return view('welcome');
});

Route::post('/test3', function(Request $request){
	$file = $request->file('file_id');
	$newfile;
	User::create([
		'email' => new MongoDB\BSON\Binary(file_get_contents($file), MongoDB\BSON\Binary::TYPE_GENERIC)
	]);
});

Route::post('/test4', function(Request $request){
	$array = array();

	return $array;
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

                      /************ Application Navigation routes  ***********/
Route::get('/', 'AppNavigationController@index');

Route::get('/sell_car', 'AppNavigationController@sellCarPage');

Route::get('/sell_car/{id}', 'AppNavigationController@listingInfo');

Route::get('/signup', 'AppNavigationController@signup');

Route::get('/login', 'AppNavigationController@login');

Route::get('/create_listing', 'AppNavigationController@createListing');

Route::get('/update_listing/{id}', 'AppNavigationController@updateListing');

Route::get('/buying_advices', 'AppNavigationController@buyingAdvices');

Route::get('/buying_advices/{id}', 'AppNavigationController@buyingAdvicesItem');

Route::get('/search_results', 'AppNavigationController@searchResults');

Route::get('/search_results/{id}', 'AppNavigationController@searchResultsListing');

Route::get('/reviews', 'AppNavigationController@reviews');

Route::get('/reviews/{id}', 'AppNavigationController@reviewsItem');

Route::get('/about_us', 'AppNavigationController@aboutUs');

Route::get('/item', 'AppNavigationController@getItemData');



//route to check if user is authenticated or not
Route::get('/checkAuth', ['middleware'=>'isAuth', function(Request $request){
	return response()->json([
        'auth' => true
    ]);
}]);


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

Route::post('/get_cityMPG', 'VehicleParameters@getData');

Route::post('/get_highwayMPG', 'VehicleParameters@getData');

Route::post('/get_engine', 'VehicleParameters@getData');


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


//API's to handle search requests
Route::post('/get_items_by_zipCode', 'ListingController@getItemsByZipCode');

Route::post('/get_all_items', 'ListingController@getAllItems');


//API to filter items
Route::post('/filter_items', 'ListingController@filterItems');

Route::post('/filter_items_withZipCodes', 'ListingController@filterItemsWithZipCodes');


//API to get listing info on click
Route::post('/get_listing', 'ListingController@getListing');



    /************ MESSAGES ************/


//API to create message object in database;
Route::post('/create_message', 'MessageController@createMessage');


//API to fetch messageItems by listingId
Route::post('/get_messageItems', 'MessageController@getMessageItems');

//API to mark message as visited
Route::get('/message_visited', 'MessageController@messageVisited');

//API to count how many unread messages
Route::post('/new_messages_count', 'MessageController@newMessagesCount');

//API to delete message
Route::get('/delete_message', 'MessageController@deleteMessage');


            /************** REVIEWS ***********/

//API to get last 3 reviews
Route::get('/get_last_reviews', 'AdminController@fetchLatestReviews');

//API to get all reviews
Route::get('/get_all_reviews', 'AdminController@getAllReviews');

//API to get review item
Route::get('/fetch_review_item', 'AdminController@fetchReviewItem');


           /************* GET LISTINGS BY BRAND **************/

//get all items
Route::get('/all_listings', 'ListingController@allItems');


          /**************  GET RECOMMENDED ITEMS BY COOKIE ********/
Route::get('/check_cookies', function(Request $request){
	$cookieIsSet = false;
	
	if($request->cookie('recommendedItems')){
		$cookieIsSet = true;
	}

	return response()->json([
		'cookieIsSet' => $cookieIsSet
	]);
});

Route::get('/recommended_items', 'ListingController@recommendedItems');


//API to get latest listings
Route::get('/latest_offers', 'ListingController@latestOffers');