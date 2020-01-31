<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Listing;
use App\BuyingAdvice;
use App\Review;

class AppNavigationController extends Controller
{
    public function index()
    {
        return view('main_page.main_page');
    }

    public function sellCarPage(){
    	return view('sell_page.sell_car');
    }

    public function listingInfo($id){
    	$listing = Listing::find($id);
    	return view('listing_info_page.listing_info');
    }

    public function signup(){
    	return view('signup_page.signup_page');
    }

    public function login(){
    	return view('login_page.login_page');
    }

    public function createListing(){
    	return view('create_listing_page.create_listing_page');
    }

    public function updateListing($id){
    	$listing = Listing::find($id);
    	return view('update_listing_page.update_listing_page');
    }

    public function buyingAdvices(){
    	return view('buying_advices_page.buying_advices_page');
    }

    public function buyingAdvicesItem($id){
    	$buyingAdvice = BuyingAdvice::find($id);
    	return view('buying_advices_item_page.buying_advices_item_page');
    }

    public function searchResults(){
    	return redirect('/');
    }

    public function searchResultsListing(){
    	return redirect('/');
    }

    public function reviews(){
    	return view('reviews_page.reviews_page');
    }

    public function reviewsItem($id){
    	$review = Review::find($id);
    	return view('reviews_item_page.reviews_item_page');
    }

    public function aboutUs(){
    	return view('about_us_page.about_us_page');
    }
}
