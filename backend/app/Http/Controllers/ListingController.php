<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Listing;
use App\User;

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
}
