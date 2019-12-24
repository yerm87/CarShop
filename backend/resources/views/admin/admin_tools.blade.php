@extends('index')

@section('content')
    <div class="adminToolsWrapper">
    	@if($id)
    	    <div class="adminToolsMenu">
    	        <p>Admin Page</p>
    	        <div>
    		        <p>Welcome, {{$firstName}} {{$lastName}}</p>
    	            <p><a>Logout</a></p>
    	        </div>
            </div>
            <div class="adminToolsContent">
            	@if(!$params || $params === 'buyingAdvices')
                    @include('includes.options.buyingAdvicesActive')
                @endif
                @if($params === 'reviews')
                    @include('includes.options.reviewsActive')
                @endif
                <div class="content">
                	@if(!$params || $params === 'buyingAdvices')
                	    <a class="addItem" href="/create_buying_advice">Add Buying Advice</a>
                	    <table>
                	    	<tr>
                	    		<th>post_id</th>
                	    		<th>image</th>
                	    		<th>title</th>
                	    		<th>description</th>
                	    		<th>author</th>
                	    		<th>date</th>
                	    	</tr>
                	    	@foreach($buyingAdvices as $buyingAdvice)
                	    	    <tr>
                	    	    	<td>{{substr($buyingAdvice->_id, 0, 5)}}...</td>
                	    	    	<td>
                	    	    		@if($buyingAdvice->image !== 'no image')
                	    	    		    <img src="data:jpeg;base64, {{base64_encode($buyingAdvice->image->getData())}}" width="120" height="120" />
                	    	    		    @else
                	    	    		        <img src="assets/no_photo.jpg" width="120" height="120" />
                	    	    		@endif
                	    	    	</td>
                	    	    	<td>{{$buyingAdvice->title}}</td>
                	    	    	<td>{{$buyingAdvice->content}}</td>
                	    	    	<td>{{$buyingAdvice->author}}</td>
                	    	    	<td>{{$buyingAdvice->created_at}}</td>
                	    	    	<td>
                	    	    		<a href="/update_buying_advice?post_id={{$buyingAdvice->_id}}" class="updateItem">Update</a>
                	    	    		<a href="/delete_buying_advice?post_id={{$buyingAdvice->_id}}" class="deleteItem">Delete</a>
                	    	    	</td>
                	    	    </tr>
                	    	@endforeach
                	    </table>
                	    @elseif($params === 'reviews')
                	        <a class="addItem" href="/create_review">Add Review</a>
                	        <table>
                	    	<tr>
                	    		<th>post_id</th>
                	    		<th>image</th>
                	    		<th>title</th>
                	    		<th>description</th>
                	    		<th>author</th>
                	    		<th>date</th>
                	    	</tr>
                	    	@foreach($reviews as $review)
                	    	    <tr>
                	    	    	<td>{{substr($review->_id, 0, 5)}}...</td>
                	    	    	<td>
                	    	    		@if($review->image !== 'no image')
                	    	    		    <img src="data:jpeg;base64, {{base64_encode($review->image->getData())}}" width="120" height="120" />
                	    	    		    @else
                	    	    		        <img src="assets/no_photo.jpg" width="120" height="120" />
                	    	    		@endif
                	    	    	</td>
                	    	    	<td>{{$review->title}}</td>
                	    	    	<td>{{$review->content}}</td>
                	    	    	<td>{{$review->author}}</td>
                	    	    	<td>{{$review->created_at}}</td>
                	    	    	<td>
                	    	    		<a href="/update_review?post_id={{$review->_id}}" class="updateItem">Update</a>
                	    	    		<a href="/delete_review?post_id={{$review->_id}}" class="deleteItem">Delete</a>
                	    	    	</td>
                	    	    </tr>
                	    	@endforeach
                	    </table>
                	@endif
                </div>
            </div>
        @endif
    </div>
@endsection