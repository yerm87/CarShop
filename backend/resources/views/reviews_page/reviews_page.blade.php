@extends('index')

@section('page_styles')
    <link href="{{asset('css/reviews_page_styles.css')}}" rel="stylesheet" type="text/css">
@endsection

@section('initialRendering')
    <div class="wrapper">
        <h1>Reviews</h1>
        <div>
            @foreach($reviews as $review)
                <div class="reviewItem">
                    <div class="reviewItemImage"
                         style="background: url('{{$review->image !== 'no image' ? $review->image : '/assets/no_photo.jpg'}}') no-repeat center center;
                              background-size: cover"></div>
                    <a href="/reviews/{{$review->_id}}"><div class="reviewItemContent">
                        <h4>{{$review->title}}</h4>
                        <div class="nameAndDate">
                            <p>By {{$review->author}} on {{substr($review->created_at, 0, 10)}}</p>
                        </div>
                        <p>{{strlen($review->content) > 350 ? substr($review->content, 0, 350) . '...' : $review->content}}</p>
                    </div></a>
                </div>
            @endforeach
        </div>
    </div>
@endsection

@section('content')
    <script src="{{asset('js/bundle.js')}}"></script>
    <script src="{{asset('js/0.js')}}"></script>
    <script src="{{asset('js/1.js')}}"></script>
    <script src="{{asset('js/2.js')}}"></script>
    <script src="{{asset('js/3.js')}}"></script>
    <script src="{{asset('js/4.js')}}"></script>
    <script src="{{asset('js/5.js')}}"></script>
    <script src="{{asset('js/6.js')}}"></script>
    <script src="{{asset('js/7.js')}}"></script>
    <script src="{{asset('js/8.js')}}"></script>
    <script src="{{asset('js/9.js')}}"></script>
    <script src="{{asset('js/10.js')}}"></script>
    <script src="{{asset('js/11.js')}}"></script>
    <script src="{{asset('js/12.js')}}"></script>
    <script src="{{asset('js/13.js')}}"></script>
    <script src="{{asset('js/14.js')}}"></script>
    <script src="{{asset('js/15.js')}}"></script>
    <script src="{{asset('js/16.js')}}"></script>
    <script src="{{asset('js/17.js')}}"></script>
    <script src="{{asset('js/18.js')}}"></script>
    <script src="{{asset('js/19.js')}}"></script>
@endsection