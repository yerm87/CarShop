<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Listing;
use App\User;
use App\Parameters;

class ListingController extends Controller
{
    public function fetchItemsForSeller(Request $request){
    	//$user = $request->session()->get('key');
    	$listings = Listing::where([
    		'user_id' => $request->session()->get('key')
    	])->get();

    	$modifiedListings = array();

    	foreach($listings as $listing){
    		$images = array();

    		foreach($listing->images as $image){
    		    array_push($images, base64_encode($image));
    	    }

    	    $listing->images = $images;

    	    array_push($modifiedListings, $listing);
    	}

    	return $modifiedListings;
    }

    public function fetchDataForListing(Request $request){
    	$listing = Listing::find($request->all())->first();
    	$listing->parameters = Parameters::all();

    	$images = array();

    	foreach($listing->images as $image){
    		$image = base64_encode($image);
    		array_push($images, $image);
    	}
    	$listing->images = $images;
    	return $listing;
    }
}
