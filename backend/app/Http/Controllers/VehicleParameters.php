<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Parameters;

class VehicleParameters extends Controller
{
	public function getData(Request $request){
		$type = $request->type;
	    $params = $request->params;

	    if($params !== 'select'){
		    $parameters = Parameters::where([
			    'type' => $type
		    ])->get()->first();

		    return $parameters->values;
	    } else if($params === 'select'){
		    return '';
	    }
	}

    public function getParameters(Request $request){
        $type = $request->type;
	    $param = Parameters::where([
		    'type' => $type
	    ])->get()->first();
	    return $param->values;
    }

    public function getModel(Request $request){
        $type = $request->type;
	    $params = $request->params;

	    if($params !== 'select'){
		    $parameters = Parameters::where([
		        'type' => $type 
	        ])->get()->first();
	        $values = $parameters->values;
	        return $values[$params];
	    } else if($params === 'select'){
		    return '';
	    }
    }
}
