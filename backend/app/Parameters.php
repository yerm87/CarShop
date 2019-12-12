<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Jenssegers\Mongodb\Eloquent\Model as Eloquent;

class Parameters extends Eloquent
{
    protected $fillable = [
      'type', 'values'
    ];

    protected $collection = 'vehicleParameters';
}
