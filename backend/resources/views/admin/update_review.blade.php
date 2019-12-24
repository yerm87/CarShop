@extends('index')

@section('content')
    @if($id)
        <div class="createBuyingAdvice">
    	    <h1>Update Review</h1>
    	    <form action="/update_review_handler" method="post" enctype="multipart/form-data">
                {{csrf_field()}}
                <input type="hidden" name="_id" value={{$post_id}} />
    	    	<div class="title">
    	    		<label for="title">Title</label>
    	            <input type="text" name="title" value="{{$title}}" />
    	    	</div>
    	    	<div class="buyingAdviceContent">
    	    		<label for="content">Content</label>
    	    		<textarea rows="15" name="content">{{$content}}</textarea>
    	    	</div>
    	    	<div class="uploadImage">
    	    		<label for="image">Post Image</label>
    	    		<input type="file" name="image" />
    	    	</div>
    	    	<input type="submit" name="submit" value="Update" />
            </form>
        </div>
    @endif
@endsection