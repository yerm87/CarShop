@extends('index')

@section('page_styles')
    <link href="{{asset('css/signup_page.css')}}" rel="stylesheet" type="text/css">
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
    <div class="container">
        <div class="mode">
            <p id="signup"
                class="activeClass">Sign Up</p>
            <p id="login">Log In</p>
        </div>
        <form class="form">
            <input type="hidden" name="_token" id="csrf-token" value="{{ Session::token() }}" />
            <div class="inputWrapper">
                <label for="email">Email Address</label>
            </div>
            <input type="email"
                    class="input"
                    id="email" 
                    name="email" />
            <div class="inputWrapper">
                <label for="password">Password</label>
            </div>
            <input type="password"
                    class="input"
                    id="password" 
                    name="password" />
            <div class="inputWrapper">
                <label for="confirmPassword">Confirm Password</label>
            </div>
            <input type="password"
                    class="input"
                    id="confirmPassword" 
                    name="confirmPassword" />
            <input class="submit" 
                    type="submit" 
                    value="Sign Up" />
        </form>
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