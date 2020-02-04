<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Listing;
use App\BuyingAdvice;
use App\Review;

class AppNavigationController extends Controller
{
    private function transformBinaryToBase64($listings){
        $modifiedListings = array();

        foreach($listings as $listing){
            $images = array();

            foreach($listing->images as $image){
                array_push($images, base64_encode($image));
            }

            if(count($images) > 0){
                $listing->images = 'data:jpeg;base64,' . $images[0];
            } else {
                $listing->images = '';
            }

            array_push($modifiedListings, $listing);
        }

        return $modifiedListings;
    }

    private function transformSingleBinaryImage($inputArray){
        $items = array();

        foreach($inputArray as $inputItem){

            $image = $inputItem->image;

            if($image !== 'no image'){
                $inputItem->image = 'data:jpeg;base64,' . base64_encode($image);
            }

            array_push($items, $inputItem);
        }

        return $items;
    }

    private function getRecommendedItems($request){
        if($request->cookie('recommendedItems')){
            $param = $request->cookie('recommendedItems');
            $allListings = Listing::where([
                'make' => $param
            ])->get();

            $listings = array();
            
            if(count($allListings) >= 3){
                for($i=count($allListings)-1; $i>=count($allListings)-3; $i--){
                    array_push($listings, $allListings[$i]);
                }
            } else {
                $listings = $allListings;
            }

            $modifiedListings = $this->transformBinaryToBase64($listings);
            
        } else {
            $modifiedListings = array();
        }

        return $modifiedListings;
    }

    private function getLatestOffers(){
        $latestOffersListings = Listing::all();
        $modifiedLatestOffers = array();

        if(count($latestOffersListings) >= 15){
            for($i=count($latestOffersListings)-1; $i>=count($latestOffersListings)-15; $i--){
                array_push($modifiedLatestOffers, $latestOffersListings[$i]);
            }
        } else {
            $modifiedLatestOffers = $latestOffersListings;
        }

        $latestOffers = $this->transformBinaryToBase64($modifiedLatestOffers);

        return $latestOffers;
    }

    private function getBrands(){
        $data = Listing::all();
        $dataMakes = array();

        foreach($data as $dataItem){
            array_push($dataMakes, $dataItem->make);
        }

        $dataMakesUnique = array();

        foreach($dataMakes as $make){
            if(!in_array($make, $dataMakesUnique)){
                array_push($dataMakesUnique, $make);
            }
        }

        $finalData = array();

        foreach($dataMakesUnique as $makeUnique){
            $listingItem = Listing::where([
                'make' => $makeUnique
            ])->get();

            $count = count($listingItem);

            $finalData[$makeUnique] = $count;
        }

        return $finalData;
    }

    private function getLatestReviews(){
        $reviews = Review::all();
        $modifiedReviews = array();

        if(count($reviews)>=3){
            for($i=count($reviews)-1; $i>=count($reviews)-3; $i--){
                array_push($modifiedReviews, $reviews[$i]);
            }
        } else {
            $modifiedReviews = $reviews;
        }

        $modifiedReviews = $this->transformSingleBinaryImage($modifiedReviews);

        return $modifiedReviews;
    }

    public function index(Request $request)
    {

        // recommendedItems
        $modifiedListings = $this->getRecommendedItems($request);

        //latestOffers
        $latestOffers = $this->getLatestOffers();

        //chooseBrand
        $brands = $this->getBrands();

        //latestReviews
        $latestReviews = $this->getLatestReviews();

        //return $latestReviews;
        return view('main_page.main_page', compact('modifiedListings', 'latestOffers', 'brands', 'latestReviews'));
    }

    public function sellCarPage(){
        $advices = BuyingAdvice::all();

        if(count($advices)>=3){
            $advicesToRender = array();

            for($i=count($advices)-1; $i>=count($advices)-3; $i--){
                array_push($advicesToRender, $advices[$i]);
            }
            $advicesToRender = $this->transformSingleBinaryImage($advicesToRender);
        } else {
            $advicesToRender = $advices;
        }

    	return view('sell_page.sell_car', compact('advicesToRender'));
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
        $advices = BuyingAdvice::all();
        $items = array();

        for($i=count($advices)-1; $i>=0; $i--){
            array_push($items, $advices[$i]);
        }

        $advices = $this->transformSingleBinaryImage($items);

    	return view('buying_advices_page.buying_advices_page', compact('advices'));
    }

    public function buyingAdvicesItem($id){
    	$buyingAdvice = BuyingAdvice::find($id);

        if($buyingAdvice->image !== 'no image'){
            $buyingAdvice->image = 'data:jpeg;base64,' . base64_encode($buyingAdvice->image);
        }

    	return view('buying_advices_item_page.buying_advices_item_page', compact('buyingAdvice'));
    }

    public function searchResults(){
    	return redirect('/');
    }

    public function searchResultsListing($id){
    	$listing = Listing::find($id);
        $images = array();

        if(count($listing->images) > 0){
            foreach($listing->images as $image){
                array_push($images, 'data:jpeg;base64,' . base64_encode($image));
            }

            $listing->images = $images;
            $listing->image = $images[0];
        }
        
        return view('listing_info_page.listing_info', compact('listing'));
    }

    public function reviews(){
        $reviews = Review::all();
        $reviewsReversed = array();

        for($i=count($reviews)-1; $i>=0; $i--){
            array_push($reviewsReversed, $reviews[$i]);
        }

        $reviews = $this->transformSingleBinaryImage($reviewsReversed);
        
        return view('reviews_page.reviews_page', compact('reviews'));
    }

    public function reviewsItem($id){
    	$review = Review::find($id);

        if($review->image !== 'no image'){
            $review->image = 'data:jpeg;base64,' . base64_encode($review->image);
        }
        
    	return view('reviews_item_page.reviews_item_page', compact('review'));
    }

    public function aboutUs(){
    	return view('about_us_page.about_us_page');
    }

    public function getItemData(Request $request){
        $param = $request->param;
        $listings = Listing::where([
            'make' => $param
        ])->get();

        $listings = $this->transformSingleBinaryImage($listings);
        
        //return view('item.item', compact('listings'));
        return $listings;
    }
}
