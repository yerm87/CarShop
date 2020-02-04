@extends('index')

@section('content')
    <div>
       @foreach($listings as $listing)
           <div>
           	  <p>{{$listing->year}}</p>
           	  <p>{{$listing->make}}</p>
           	  <p>{{$listing->model}}</p>
           	  <p>{{$listing->bodyStyle}}</p>
           	  <p>{{$listing->transmission}}</p>
           	  <p>{{$listing->exteriorColor}}</p>
           	  <p>{{$listing->interiorColor}}</p>
           	  <p>{{$listing->numberOfDoors}}</p>
           	  <p>{{$listing->fuelType}}</p>
           	  <p>{{$listing->condition}}</p>
           	  <p>{{$listing->price}}</p>
           	  <p>{{$listing->mileage}}</p>
           	  <p>{{$listing->description !== null ? $listing->description : ''}}</p>
           	  <p>{{$listing->firstName}}</p>
           	  <p>{{$listing->lastName}}</p>
           	  <p>{{$listing->email}}</p>
           	  <p>{{$listing->phoneNumber}}</p>
           	  <p>{{$listing->city}}</p>
           	  <p>{{$listing->zip}}</p>
           	  <div style="background:url('{{$listing->images !== '' ? $listing->images : '/assets/no_photo.jpg'}}') no-repeat center center;
           	      background-size: cover;
           	      width: 400px;
           	      height: 160px;
           	  "></div>
           	  <p>{{$listing->cityMPG}}</p>
           	  <p>{{$listing->highwayMPG}}</p>
           	  <p>{{$listing->engine}}</p>
           	  <br />
           </div>
       @endforeach
    </div>
@endsection