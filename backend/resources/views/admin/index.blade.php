@extends('index')

@section('content')
    <div class="wrapper">
    	<h3>Get access as admin</h3>
    	<form action="/middleware" method="post">
    		{{csrf_field()}}
            <input type="text" name="username" placeholder="username" />
            <input type="password" name="password" placeholder="password" />
            <input type="submit" name="submit" value="Log In" />
        </form>
    </div>
@endsection