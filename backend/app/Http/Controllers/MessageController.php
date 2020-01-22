<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Message;

class MessageController extends Controller
{
    public function createMessage(Request $request){
    	$message = Message::create($request->all());
    	$message->visited = false;

    	$message->update();

    	return response()->json([
            'created' => true
        ]);
    }

    public function getMessageItems(Request $request){
    	$listingItems = $request->listingItemsIds;

	    $messages = array();

	    for($i=0; $i<count($listingItems); $i++){
		    $messagesItems = Message::where([
			    'itemId' => $listingItems[$i]
		    ])->get();

		    foreach($messagesItems as $messagesItem){
			    array_push($messages, $messagesItem);
		    }
	    }

	    $arrayReverse = array();

	    for($i=count($messages)-1; $i>=0; $i--){
		    array_push($arrayReverse, $messages[$i]);
	    }

	    return $arrayReverse;
    }

    public function messageVisited(Request $request){
    	$id = $request->id;

    	$message = Message::find($id);
    	$message->visited = true;
    	$message->update();

    	return 'updated';
    }

    public function newMessagesCount(Request $request){
    	$listingsIds = $request->listingsIds;

    	$messages = array();

    	foreach($listingsIds as $listingId){
    		$messagesItems = Message::where([
    			'itemId' => $listingId,
    			'visited' => false
    		])->get();

    		foreach($messagesItems as $messagesItem){
    			array_push($messages, $messagesItem);
    		}
    	}

    	return count($messages);
    }

    public function deleteMessage(Request $request){
    	$id = $request->id;
    	$message = Message::find($id);
    	$message->delete();

    	return 'deleted';
    }
}
