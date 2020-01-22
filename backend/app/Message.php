<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Jenssegers\Mongodb\Eloquent\Model as Eloquent;

class Message extends Eloquent
{
    protected $fillable = [
        'firstName', 'lastName', 'email', 'phoneNumber', 'content', 'itemId', 'visited'    
    ];
  
    protected $collection = 'messages';
}
