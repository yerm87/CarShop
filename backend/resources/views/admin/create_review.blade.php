@extends('index')

@section('content')
    @if($id)
        <div class="createBuyingAdvice">
    	    <h1>Create Review</h1>
    	    <form action="/create_review_handler" method="post" enctype="multipart/form-data">
    	    	{{csrf_field()}}
    	    	<div class="title">
    	    		<label for="title">Title</label>
    	            <input type="text" name="title" />
    	    	</div>
    	    	<div class="buyingAdviceContent">
    	    		<label for="content">Content</label>
    	    		<textarea rows="15" name="content"></textarea>
    	    	</div>
    	    	<div class="uploadImage">
    	    		<label for="image">Post Image</label>
    	    		<input type="file" name="image" />
    	    	</div>
    	    	<input type="submit" name="submit" value="Create" />
            </form>
        </div>
    @endif
@endsection