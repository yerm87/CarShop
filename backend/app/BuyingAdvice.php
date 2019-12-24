<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Jenssegers\Mongodb\Eloquent\Model as Eloquent;

class BuyingAdvice extends Eloquent
{
    protected $fillable = [
    	'title', 'content', 'image'
    ];

    protected $collection = 'buyingAdvices';
}
