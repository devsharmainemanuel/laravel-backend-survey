<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SurveyCategoryController extends Controller
{
    public function store(Request $request)
    {
       dd($request->except('_token'));
    }

}
