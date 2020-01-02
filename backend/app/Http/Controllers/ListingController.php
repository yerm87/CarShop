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

    public function deleteListing(Request $request){
        $id = $request->_id;
        $listing = Listing::find($id);
        $listing->delete();
        return 'deleted';
    }

    public function getItemsByZipCode(Request $request){

        if($request->condition && !$request->make && !$request->model){
            $results = Listing::where([
                'condition' => $request->condition
            ])->get();
        } else if(!$request->condition && $request->make && !$request->model){
            $results = Listing::where([
                'make' => $request->make
            ])->get();
        } else if($request->condition && $request->make && !$request->model){
            $results = Listing::where([
                'make' => $request->make,
                'condition' => $request->condition
            ])->get();
        } else if(!$request->condition && $request->make && $request->model){
            $results = Listing::where([
                'make' => $request->make,
                'model' => $request->model
            ])->get();
        } else if($request->condition && $request->make && $request->model){
            $results = Listing::where([
                'condition' => $request->condition,
                'make' => $request->make,
                'model' => $request->model
            ])->get();
        } else {
            $results = Listing::all();
        }

        $filterByPrice = array();
        foreach($results as $result){
            $result->price = intval($result->price);

            if($request->maxPrice){
                if($result->price <= intval($request->maxPrice)){
                    array_push($filterByPrice, $result);
                }
            } else {
                $filterByPrice = $results;
            }
        }

        $zipCodes = $request->zipCodes;

        $listings = $filterByPrice;

        $searchResultByZip = array();

        foreach($listings as $listing){
            if(in_array($listing->zip, $zipCodes)){
                array_push($searchResultByZip, $listing);
            }
        }

        $modifiedListings = array();

        foreach($searchResultByZip as $listing){
            $images = array();

            foreach($listing->images as $image){
                array_push($images, base64_encode($image));
            }

            $listing->images = $images;

            array_push($modifiedListings, $listing);
        }

        return $modifiedListings;
    }

    public function getAllItems(Request $request){
        if($request->condition && !$request->make && !$request->model){
            $results = Listing::where([
                'condition' => $request->condition
            ])->get();
        } else if(!$request->condition && $request->make && !$request->model){
            $results = Listing::where([
                'make' => $request->make
            ])->get();
        } else if($request->condition && $request->make && !$request->model){
            $results = Listing::where([
                'make' => $request->make,
                'condition' => $request->condition
            ])->get();
        } else if(!$request->condition && $request->make && $request->model){
            $results = Listing::where([
                'make' => $request->make,
                'model' => $request->model
            ])->get();
        } else if($request->condition && $request->make && $request->model){
            $results = Listing::where([
                'condition' => $request->condition,
                'make' => $request->make,
                'model' => $request->model
            ])->get();
        } else {
            $results = Listing::all();
        }

        $filterByPrice = array();
        foreach($results as $result){
            $result->price = intval($result->price);

            if($request->maxPrice){
                if($result->price <= intval($request->maxPrice)){
                    array_push($filterByPrice, $result);
                }
            } else {
                $filterByPrice = $results;
            }
        }

        $modifiedListings = array();

        foreach($filterByPrice as $listing){
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
