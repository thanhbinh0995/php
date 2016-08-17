<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/home',function() {
	return View::make('welcome');
});
Route::get('about',function() {
	return view('about');
});
Route::get('contact',function() {
	return view('contact');
});
Route::post('contact',function() {
	$data = Input::all();
	$rule = array('subject' => 'required', 'message' => 'required');
	$validator = Validator::make($data,$rule);
	if ($validator->fails()) {
		return Redirect::to('contact')->withErrors($validator)->withInput();
	}
	$emailcontent = array('subject' => $data['subject'],
						'emailmessage' =>  $data['message']);
	Mail::send('emails.contactemail', $emailcontent, function ($message) {
	
	    $message->to('phamthaoqlr42@gmail.com', 'Learning Laravel Support')->subject('Contact via out contact form');
	});
	return 'Your message has been sent';

});

Route::get('auth/facebook','Auth\AuthController@redirectToProvider');
Route::get('auth/facebook/callback', 'Auth\AuthController@handleProviderCallback');
Route::get('home', array('as' => 'home', 'uses' => function(){
  	return view('welcome');
}));

// Route::get('/', function()
// {
//     $data = array();
//     if (Auth::check()) {
//         $data = Auth::user();
//     }
//     return View::make('user', array('data'=>$data));
// });

// Route::get('login/fb', function() {
//     $facebook = new Facebook(Config::get('facebook'));
//     $params = array(
//         'redirect_uri' => url('/login/fb/callback'),
//         'scope' => 'email',
//     );
//     return Redirect::to($facebook->getLoginUrl($params));
// });

// Route::get('login/fb/callback', function() {
//     $code = Input::get('code');
//     if (strlen($code) == 0) return Redirect::to('/')->with('message', 'There was an error communicating with Facebook');
    
//     $facebook = new Facebook(Config::get('facebook'));
//     $uid = $facebook->getUser();
     
//     if ($uid == 0) return Redirect::to('/')->with('message', 'There was an error');
     
//     $me = $facebook->api('/me');

// 	$profile = Profile::whereUid($uid)->first();
//     if (empty($profile)) {

//     	$user = new User;
//     	$user->name = $me['first_name'].' '.$me['last_name'];
//     	$user->email = $me['email'];
//     	$user->photo = 'https://graph.facebook.com/'.$me['id'].'/picture?type=large';

//         $user->save();

//         $profile = new Profile();
//         $profile->uid = $uid;
//     	$profile->username = $me['id'];
//     	$profile = $user->profiles()->save($profile);
//     }
     
//     $profile->access_token = $facebook->getAccessToken();
//     $profile->save();

//     $user = $profile->user;
 
//     Auth::login($user);
     
//     return Redirect::to('/')->with('message', 'Logged in with Facebook');
// });


// Route::get('logout', function() {
//     Auth::logout();
//     return Redirect::to('/');
// });