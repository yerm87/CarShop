@extends('index')

@section('content')
    <div class="adminToolsWrapper">
    	@if($id)
    	    <div class="adminToolsMenu">
    	        <p>Admin Page</p>
    	        <div>
    		        <p>Welcome, {{$firstName}} {{$lastName}}</p>
    	            <a href="/logout_admin">Logout</a>
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
                	    	    	<td>
                	    	    		@if(strlen($buyingAdvice->content) < 100)
                	    	    		   {{$buyingAdvice->content}}
                	    	    		   @else
                	    	    		      {{substr($buyingAdvice->content, 0, 100)}}...
                	    	    		@endif
                	    	    	</td>
                	    	    	<td>{{$buyingAdvice->author}}</td>
                	    	    	<td>{{$buyingAdvice->created_at}}</td>
                	    	    	<td>
                	    	    		<a href="/update_buying_advice?post_id={{$buyingAdvice->_id}}" class="updateItem">Update</a>
                	    	    		<a href="/delete_buying_advice?post_id={{$buyingAdvice->_id}}" class="deleteItem">Delete</a>
                	    	    	</td>
                	    	    </tr>
                	    	@endforeach
                	    </table>
                        <div class="pages">
                            @if(count($arrayOfPages) > 1)
                                @foreach($arrayOfPages as $pageItem)
                                    @if(intval($page) === $pageItem)
                                        <a href="/admin_tools?params=buyingAdvices&page={{$pageItem}}"
                                           class="page activePage">{{$pageItem}}</a>
                                        @else
                                        <a href="/admin_tools?params=buyingAdvices&page={{$pageItem}}"
                                        class="page">{{$pageItem}}</a>
                                    @endif
                                @endforeach
                            @endif
                        </div>
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
                	    	    	<td>
                                        @if(strlen($review->content) < 100)
                                           {{$review->content}}
                                           @else
                                              {{substr($review->content, 0, 100)}}...
                                        @endif
                                    </td>
                	    	    	<td>{{$review->author}}</td>
                	    	    	<td>{{$review->created_at}}</td>
                	    	    	<td>
                	    	    		<a href="/update_review?post_id={{$review->_id}}" class="updateItem">Update</a>
                	    	    		<a href="/delete_review?post_id={{$review->_id}}" class="deleteItem">Delete</a>
                	    	    	</td>
                	    	    </tr>
                	    	@endforeach
                	    </table>
                        <div class="pages">
                            @if(count($pagesReviews) > 1)
                                @foreach($pagesReviews as $pageItem)
                                    @if(intval($page) === $pageItem)
                                        <a href="/admin_tools?params=reviews&page={{$pageItem}}"
                                           class="page activePage">{{$pageItem}}</a>
                                        @else
                                        <a href="/admin_tools?params=reviews&page={{$pageItem}}"
                                        class="page">{{$pageItem}}</a>
                                    @endif
                                @endforeach
                            @endif
                        </div>
                	@endif
                </div>
            </div>
        @endif
    </div>
@endsection