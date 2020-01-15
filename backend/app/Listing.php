<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Jenssegers\Mongodb\Eloquent\Model as Eloquent;

class Listing extends Eloquent
{
    protected $fillable = [
        'images', 'bodyStyle', 'condition', 'description', 'email', 'exteriorColor', 'firstName', 'fuelType', 'interiorColor', 'lastName', 'make', 'mileage', 'model',
        'numberOfDoors', 'phoneNumber', 'price', 'transmission', 'year', 'zip', 'city', 'cityMPG', 'highwayMPG', 'engine'
      ];
  
      protected $collection = 'listings';

      public function user(){
      	  return $this->belongsTo('App\User', 'user_id');
      }
}
