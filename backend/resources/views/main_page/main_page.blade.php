@extends('index')

@section('page_styles')
    <link href="{{asset('css/main_page.css')}}" rel="stylesheet" type="text/css">
@endsection

@section('initialRendering')
    <!--  ******HEADER********   -->

    <div class="mainWrapper">
        <div class="toolbar">
            <div class="logoWrapper">
                <h2 class="logoText">CarShopping</h2>
            </div>
            <div class="navigationItems">
                <a class="link" href="/">
                    <div class="wrapperNavigationItem">
                        <div class="navigationItem">Cars for sale</div>
                    </div>
                </a>
                <a class="link" href="/sell_car">
                    <div class="wrapperNavigationItem">
                        <div class="navigationItem">Sell your car</div>
                    </div>
                </a>
                <a class="link" href="/reviews">
                    <div class="wrapperNavigationItem">
                        <div class="navigationItem">Reviews</div>
                    </div>
                </a>
                <a class="link" href="/about_us">
                    <div class="wrapperNavigationItem">
                        <div class="navigationItem">About Us</div>
                    </div>
                </a>
                <a href="/signup">
                    <button class="button menuButton">Sign Up</button>
                </a>
                <a href="/login">
                    <button class="button menuButton">Log In</button>
                </a>
            </div>
        </div>
    </div>
    <!--  ********** CONTENT ********* -->
    <div class="contentWrapper">
        <div class="heroImage">
            <div class="title">
                <h1>Find your car</h1>
                <p>Search cars from thousands of individual sellers</p>
            </div>
            <div class="searchComponent">
                <div class="searchContainer">
                    <form class="formSearch">
                        <select style="border-top-left-radius:10px" 
                                name="condition">
                            <option value="select">New & Used</option>
                            <option value="New Car">New</option>
                            <option value="Used Car">Used</option>
                        </select>
                        <select id="makes"
                                name="make">
                            <option value="select">All Makes</option>
                        </select>
                        <select style="border-top-right-radius: : 10px" 
                                name="model">
                            <option value="select">All Models</option>
        
                        </select>
                        <select style="border-bottom-left-radius:10px" 
                                name="maxPrice">
                            <option value="select">No Max Price</option>
                            <option value="6000">$6,000</option>
                            <option value="8000">$8,000</option>
                            <option value="10000">$10,000</option>
                            <option value="15000">$15,000</option>
                        </select>
                        <div class="zip">
                            <select style="width:70%" 
                                    name="radius">
                                <option value="10">10 miles from</option>
                                <option value="50">50</option>
                            </select>
                            <input id="zip"
                                   class="input"
                                   type="number" 
                                   name="zip" 
                                   placeholder="zip code" />
                        </div>
                        <input type="submit" name="Search" value="Search" />
                    </form>           
                </div>
            </div>
        </div>
        @if(count($modifiedListings) > 0)
            <div class="recommendedItemsContainer">
                <h1>Recommended For You</h1>
                <div class="recommendedItemsContent">
                    @foreach($modifiedListings as $listing)

                    <a href="/search_results/{{$listing->_id}}"><div class="recommendedItemWrapper">
                        <div class="recommendedItemImage"
                             style="background:url('{{$listing->images !== '' ? $listing->images : '/assets/no_photo.jpg' }}') no-repeat center center;
                                 background-size: cover"></div>
                        <p>{{$listing->year}} {{$listing->make}} {{$listing->model}}</p>
                    </div></a>
                    @endforeach
                </div>
            </div>
        @endif
        <div class="latestOffersContainer">
            <h1>Latest Offers</h1>
            <div class="latestOffersContent">
                @foreach($latestOffers as $offer)
                    <div class="latestOffersItem">
                        <a href="/search_results/{{$offer->_id}}"><div class="recommendedItemWrapper">
                            <div class="recommendedItemImage"
                                 style="background:url('{{$offer->images !== '' ? $offer->images : '/assets/no_photo.jpg' }}') no-repeat center center;
                                 background-size: cover"></div>
                            <p>{{$offer->year}} {{$offer->make}} {{$offer->model}}</p>
                            <p style="color: var(--mainRed);
                                              padding-top: 0;
                                              margin-top: 0">${{$offer->price}}</p>
                        </div></a>
                    </div>
                @endforeach
            </div>
        </div>
        <div class="chooseBrandContainer">
            <h1>Choose Your Brand</h1>
            <div class="chooseBrandContent">
                @foreach($brands as $key => $value)
                    <a href="/item?param={{$key}}"><p>{{$key}} <span> ({{$value}})</span></p></a>
                @endforeach
            </div>
        </div>
        <div class="latestReviewsWrapper">
            <h1>Latest Car Reviews</h1>
            <div class="latestReviewsContent">
                @foreach($latestReviews as $review)
                    <div className={classes.container}>
                        <div class="reviewItemImage"
                             style="background:url({{$review->image !== 'no image' ? $review->image : '/assets/no_photo.jpg'}}) no-repeat center center;
                                    background-size: cover"></div>
                        <div class="reviewItemContent">
                            <p class="reviewItemTitle">
                                {{$review->title}}
                            </p>
                            <p class="reviewItemDate">
                                {{$review->created_at}}
                            </p>
                            <p class="reviewItemText">
                                {{substr($review->content, 0, 151)}}
                            </p>
                            <a href="/reviews/{{$review->_id}}"><p class="readMore">Read More</p></a>
                        </div>
                    </div>
                @endforeach
            </div>
            <form action="/reviews" method="get">
                <input type="submit" value="Read All Reviews" />
            </form>
        </div>
    </div>
    <!--  ******* FOOTER *******  -->
    <footer>@ 2020 CarShopping. All rights reserved</footer>
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