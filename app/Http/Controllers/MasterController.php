<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

use App\Http\Requests;
use NextTopIcon\App\User;

class MasterController extends Controller
{
    public function index(){
        $user = Auth::user();
        if ($user){
            return view("index")->with("loggedInUserId", array(
                "id" => $user->id,
                "alias" => $user->alias
            ));
        }

        return view("index")->with("loggedInUserId", null);
    }
}
