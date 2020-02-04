@extends('index')

@section('page_styles')
    <link href="{{asset('css/listing_info_page.css')}}" rel="stylesheet" type="text/css">
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
    <div class="mainContainer">
        <div class="container">
            <div class="containerContent">
                <div class="listingMainImage"
                     style="background: url('{{$listing->image ? $listing->image : '/assets/no_photo.jpg'}}') no-repeat center center;
                         background-size: cover"></div>
                <div class="scrollImages">
                    <div class="frame">
                        <div class="imagesContainer">
                            @foreach($listing->images as $image)
                                <div class="scrollImageContainer">
                                    <div class="scrollImage"
                                         style="background: url('{{$image}}') no-repeat center center;
                                         background-size: cover"></div>
                                </div>
                            @endforeach          
                        </div>
                    </div>
                </div>
                <div class="title">
                    <p class="condition">{{$listing->condition}}</p>
                    <p class="makeAndModel">{{$listing->year}} {{$listing->make}} {{$listing->model}}</p>
                    <p style="margin-bottom: 10px">{{$listing->mileage}} miles</p>
                </div>
                <div class="itemInfo">
                    <h2>${{$listing->price}}</h2>
                    <div class=contacts">
                        <p>Sold by {{$listing->firstName}} {{$listing->lastName}}</p>
                        <p style="color: var(--mainBlue)">{{$listing->city}} {{$listing->zip}}</p>
                    </div>
                    <h2 style="margin-top: 25px">Description</h2>
                    <p>{{$listing->description ? $listing->description : null}}</p>
                </div>
                <div class="basics">
                    <h2>Basics</h2>
                    <div class="basicsContainer">
                        <p><span>Fuel Type:</span>{{$listing->fuelType}}</p>
                        <p><span>Exterior Color:</span>{{$listing->exteriorColor}}</p>
                        <p><span>City MPG:</span>{{$listing->cityMPG}}</p>
                        <p><span>Interior Color:</span>{{$listing->interiorColor}}</p>
                        <p><span>Highway MPG:</span>{{$listing->highwayMPG}}</p>
                        <p><span>Transmission:</span>{{$listing->transmission}}</p>
                        <p><span>Engine:</span>{{$listing->engine}}</p>
                        <p><span>Mileage:</span>{{$listing->mileage}}</p>
                    </div>
                </div>
                <div class="calculatorContainer">
                    <p class="calculatorTitle">Payment Calculator</p>
                    <p class="monthlyPayment">100<span>/month</span></p>
                    <p class="estimatedPayment">Estimated payment for 
                        <span> 36 months at 7.5% APR</span>
                    </p>
                    <div class="inputsContainer">
                        <div>
                            <label for="downpayment">Down Payment</label>
                            <input name="downpayment"
                                   id="downpayment" 
                                   value="0" />
                        </div>
                        <div class="terms">
                            <p style="margin: 0">Term(months)</p>
                            <div class="termsContainer">
                                <p class="term">36</p>
                                <p class="term">48</p>
                                <p class="term">60</p>
                            </div>
                        </div>
                        <div>
                            <label for="vehiclePrice">Vehicle Price</label>
                            <input name="vehiclePrice"
                                   id="vehiclePrice" 
                                   value={{$listing->price}} />
                        </div>
                        <div class="percentage">
                            <label for="interestRate">Interest Rate(%)</label>
                            <input name="interestRate"
                                   id="interestRate" 
                                   value="0" />
                        </div>
                        <button>Calculate</button>
                    </div>
                </div>     
            </div>
            <div class="contactFormWrapper">
                <div class="formContainer">
                    <h2>Contact Seller</h2>
                    <p>(111)-111-1111</p>
                    <div class="info">
                        <div class="input">
                            <input class="inputElement"
                                   type="text" 
                                   placeholder="First Name" />
                        </div>
                        <div class="input">
                            <input class="inputElement"
                                   type="text" 
                                   placeholder="Last Name" />
                        </div>
                        <div class="input">
                            <input class="inputElement"
                                   type="email" 
                                   placeholder="email" />
                        </div>
                        <div class="input">
                            <input class="inputElement"
                               type="phoneNumber" 
                               placeholder="Phone" />
                        </div>
                    </div>
                    <div class="inputTextArea">
                        <textarea class="inputElement"
                                  placeholder="Leave Message"
                                  rows="10"></textarea>
                    </div>
                    <button>Send</button>
                </div>
            </div>
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