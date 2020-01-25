<?php

namespace App\Http\Controllers;
use App\Http\Requests\AdminRequest;
use App\Admin;
use App\Http\Requests\BuyingAdviceRequest;
use Illuminate\Http\Request;
use App\BuyingAdvice;
use App\Review;

class AdminController extends Controller
{
    public function index(Request $request){
    	if(!$request->session()->get('admin')){
    		return view('admin.index');
    	} else {
    		return redirect('/admin_tools');
    	}
    }

    public function main_window(AdminRequest $request){
    	$admin = Admin::where([
    		'username' => $request->username,
    		'password' => $request->password
    	])->get();
    	return $admin;
    }

    private function pagination($page, $itemsArray, $resultsPerPage){
        $pages = ceil(count($itemsArray)/$resultsPerPage);

        $arrayOfPages = array();
        for($i=1; $i<=$pages; $i++){
            array_push($arrayOfPages, $i);
        }

        $endpoint = $page * $resultsPerPage;
        $startpoint = $endpoint - $resultsPerPage;

        $itemsArrayModified = array();
        for($i=$startpoint; $i<$endpoint; $i++){
            if(!empty($itemsArray[$i])){
                array_push($itemsArrayModified, $itemsArray[$i]);
            }
        }

        return ['pages' => $arrayOfPages,
                'items' => $itemsArrayModified];
    }

    public function adminTools(Request $request){
    	$id = $request->session()->get('admin');
	    $admin = Admin::find($id);
	    $params = $request->params;
	    $buyingAdvices = BuyingAdvice::all();
	    $reviews = Review::all();

        $buyingAdvicesReversed = array();

        for($i=count($buyingAdvices)-1; $i>=0; $i--){
            array_push($buyingAdvicesReversed, $buyingAdvices[$i]);
        }

        $buyingAdvices = $buyingAdvicesReversed;

        $reviewsReversed = array();

        for($i=count($reviews)-1; $i>=0; $i--){
            array_push($reviewsReversed, $reviews[$i]);
        }

        $reviews = $reviewsReversed;
        //pagination
        $page = 1;
        if($request->page){
            $page = $request->page;
        }

        $resultsPerPage = 10;
        
        $resultsBuyingAdvices = $this->pagination($page, $buyingAdvices, $resultsPerPage);
        $arrayOfPages = $resultsBuyingAdvices['pages'];
        $buyingAdvices = $resultsBuyingAdvices['items'];

        $resultsReviews = $this->pagination($page, $reviews, $resultsPerPage);
        $pagesReviews = $resultsReviews['pages'];
        $reviews = $resultsReviews['items'];

	    if($admin){
		    $firstName = $admin->firstName;
	        $lastName = $admin->lastName;

	        return view('admin.admin_tools', compact('id', 'firstName', 'lastName', 'params', 'buyingAdvices', 'reviews', 'arrayOfPages', 'page', 'pagesReviews'));
	    }
    }

    public function createBuyingAdvice(Request $request){
    	$id = $request->session()->get('admin');
    	return view('admin.create_buying_advice', compact('id'));
    }

    public function updateBuyingAdvice(Request $request){
    	$id = $request->session()->get('admin');
    	$post_id = $request->post_id;
    	$advice = BuyingAdvice::find($post_id);
    	$title = $advice->title;
    	$content = $advice->content;

    	return view('admin.update_buying_advice', compact('id', 'title', 'content', 'post_id'));
    }

    public function deleteBuyingAdvice(Request $request){
    	$post_id = $request->post_id;
    	$advice = BuyingAdvice::find($post_id);
    	$advice->delete();

    	return redirect('/admin_tools');
    }

    public function createReview(Request $request){
    	$id = $request->session()->get('admin');
    	return view('admin.create_review', compact('id'));
    }

    public function updateReview(Request $request){
    	$id = $request->session()->get('admin');
    	$post_id = $request->post_id;
    	$review = Review::find($post_id);
    	$title = $review->title;
    	$content = $review->content;

    	return view('admin.update_review', compact('id', 'title', 'content', 'post_id'));
    }

    public function deleteReview(Request $request){
    	$post_id = $request->post_id;
    	$review = Review::find($post_id);
    	$review->delete();

    	return redirect('/admin_tools?params=reviews');
    }

    public function adminLogout(Request $request){
    	$request->session()->forget('admin');

    	return redirect('/login_admin');
    }

    public function fetchBuyingAdvices(){
    	$advices = BuyingAdvice::all();
    	foreach($advices as $advice){
    		if($advice->image !== 'no image'){
    			$image = base64_encode($advice->image);
    		    $advice->image = $image;
    		}
    	}
    	return $advices;
    }

    public function fetchBuyingAdvicesItem(Request $request){
    	$advice = BuyingAdvice::find($request->id);

        if($advice->image !== 'no image'){
    	    $image = base64_encode($advice->image);
    	    $advice->image = $image;
        }
    	
    	return $advice;
    }

    public function fetchLatestReviews(){
        $reviews = Review::all();
        foreach($reviews as $review){
            if($review->image !== 'no image'){
                $image = base64_encode($review->image);
                $review->image = $image;
            }
        }

        $latestItems = array();

        if(count($reviews) > 3){
            for($i=count($reviews)-1; $i>=count($reviews)-3; $i--){
                array_push($latestItems, $reviews[$i]);
            }
        } else {
            $latestItems = $reviews;
        }

        return $latestItems;
    }

    public function getAllReviews(){
        $reviews = Review::all();

        foreach($reviews as $review){
            if($review->image !== 'no image'){
                $image = base64_encode($review->image);
                $review->image = $image;
            }
        }

        $reviewsReversed = array();

        for($i=count($reviews)-1; $i>=0; $i--){
            array_push($reviewsReversed, $reviews[$i]);
        }

        return $reviewsReversed;
    }

    public function fetchReviewItem(Request $request){
        $review = Review::find($request->id);

        if($review->image !== 'no image'){
            $image = base64_encode($review->image);
            $review->image = $image;
        }
        
        return $review;
    }
}