<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Listing;
use App\User;
use App\Parameters;
use Illuminate\Support\Facades\Cookie;

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

        if($request->make){
        	Cookie::queue('recommendedItems', $request->make, 60*24*30);
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

        if($request->make){
        	Cookie::queue('recommendedItems', $request->make, 60*24*20);
        }

        return $modifiedListings;
    }

    private function filter($request, $listings){
        foreach($listings as $listing){
            $listing->price = intval($listing->price);
            $listing->year = intval($listing->year);
            $listing->mileage = intval($listing->mileage);

            $images = array();

            foreach($listing->images as $image){
                array_push($images, base64_encode($image));
            }

            $listing->images = $images;
        }

        $updatedListings = $listings;
        
        if($request->condition){
            $updatedListings = array();
            
            foreach($listings as $listing){
                if($listing->condition === $request->condition){
                    array_push($updatedListings, $listing);
                }
            }

            $listings = $updatedListings;
        }

        if($request->minYear){
            $updatedListings = array();
            
            foreach($listings as $listing){
                if($listing->year >= intval($request->minYear)){
                    array_push($updatedListings, $listing);
                }
            }

            $listings = $updatedListings;
        }

        if($request->maxYear){
            $updatedListings = array();
            
            foreach($listings as $listing){
                if($listing->year <= intval($request->maxYear)){
                    array_push($updatedListings, $listing);
                }
            }

            $listings = $updatedListings;
        }

        if($request->maxYear){
            $updatedListings = array();
            
            foreach($listings as $listing){
                if($listing->year <= intval($request->maxYear)){
                    array_push($updatedListings, $listing);
                }
            }

            $listings = $updatedListings;
        }

        if($request->minPrice){
            $updatedListings = array();
            
            foreach($listings as $listing){
                if($listing->price >= intval($request->minPrice)){
                    array_push($updatedListings, $listing);
                }
            }

            $listings = $updatedListings;
        }

        if($request->maxPrice){
            $updatedListings = array();
            
            foreach($listings as $listing){
                if($listing->price <= intval($request->maxPrice)){
                    array_push($updatedListings, $listing);
                }
            }

            $listings = $updatedListings;
        }

        if($request->mileage){
            $updatedListings = array();
            
            foreach($listings as $listing){
                if($listing->mileage <= intval($request->mileage)){
                    array_push($updatedListings, $listing);
                }
            }

            $listings = $updatedListings;
        }

        if($request->makes){
            $updatedListings = array();

            foreach($listings as $listing){
                if(in_array($listing->make, $request->makes)){
                    array_push($updatedListings, $listing);
                }
            }

            $listings = $updatedListings;
        }

        if($request->models){
            $updatedListings = array();

            foreach($listings as $listing){
                if(in_array($listing->model, $request->models)){
                    array_push($updatedListings, $listing);
                }
            }

            $listings = $updatedListings;
        }

        return $updatedListings;
    }

    public function filterItems(Request $request){

        $listings = Listing::all();

        $updatedListings = $this->filter($request, $listings);

        return $updatedListings;
    }

    public function filterItemsWithZipCodes(Request $request){
        $zipCodes = $request->zipCodes;

        $listingsByZip = array();

        foreach($zipCodes as $zip){
            $listings = Listing::where([
                'zip' => $zip
            ])->get();

            foreach($listings as $listing){
                array_push($listingsByZip, $listing);
            }
        }

        $updatedListings = $this->filter($request, $listingsByZip);

        return $updatedListings;
    }

    public function getListing(Request $request){
        $id = $request->listingId;

        $listing = Listing::find($id);

        $images = array();

        foreach($listing->images as $image){
            array_push($images, base64_encode($image));
        }

        $listing->images = $images;

        return $listing;
    }

    public function allItems(){
    	return Listing::all();
    }

    public function recommendedItems(Request $request){
    	$param = $request->cookie('recommendedItems');
    	$listings = Listing::where([
    		'make' => $param
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

    	$lastThreeItems = array();

    	if(count($modifiedListings) < 3){
    		return $modifiedListings;
    	} else {
    		for($i=count($modifiedListings)-1; $i>=count($modifiedListings)-3; $i--){
    			array_push($lastThreeItems, $modifiedListings[$i]);
    		}
    		return $lastThreeItems;
    	}
    }

    public function latestOffers(){
    	$listings = Listing::all();

    	$modifiedListings = array();
    	
    	if(count($listings) < 15){
    		foreach($listings as $listing){
    		    $images = array();

    		    foreach($listing->images as $image){
    		        array_push($images, base64_encode($image));
    	        }

    	        $listing->images = $images;

    	        array_push($modifiedListings, $listing);
    	    }
    	} else {
    		$latestListings = array();

    		for($i=count($listings)-1; $i>=count($listings)-15; $i--){
    			array_push($latestListings, $listings[$i]);
    		}

    		foreach($latestListings as $latestListing){
    			$images = array();

    		    foreach($latestListing->images as $image){
    		        array_push($images, base64_encode($image));
    	        }

    	        $latestListing->images = $images;

    	        array_push($modifiedListings, $listing);
    		}
    	}
    	return $modifiedListings;
    }
}
