<?php

namespace App;

use Jenssegers\Mongodb\Eloquent\Model as Eloquent;

class category extends Eloquent
{
    protected $collection = 'test100';
    protected $fillable = [
        'name'
    ];
}
