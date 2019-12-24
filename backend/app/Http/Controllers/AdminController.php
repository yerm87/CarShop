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
    public function index(){
    	return view('admin.index');
    }

    public function main_window(AdminRequest $request){
    	$admin = Admin::where([
    		'username' => $request->username,
    		'password' => $request->password
    	])->get();
    	return $admin;
    }

    public function adminTools(Request $request){
    	$id = $request->session()->get('admin');
	    $admin = Admin::find($id);
	    $params = $request->params;
	    $buyingAdvices = BuyingAdvice::all();
	    $reviews = Review::all();

	    if($admin){
		    $firstName = $admin->firstName;
	        $lastName = $admin->lastName;

	        return view('admin.admin_tools', compact('id', 'firstName', 'lastName', 'params', 'buyingAdvices', 'reviews'));
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
}