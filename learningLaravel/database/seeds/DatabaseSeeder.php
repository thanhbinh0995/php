<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;


class DatabaseSeeder extends Seeder
{


    public function run()
    {
       	Model::unguard();
       	$this->call('postTableSeeder');
    }
}
class postTableSeeder extends Seeder
{
	public function run()
	{
		DB::table('posts')->delete();
		// posts::create(
		// array(
		// 	'title' => 'Webdevelopment',
		// 	'content' => 'PHP, MySQL, JS'
		// 	)
		// );
		// posts::create(
	 //  		array(
	 //    		'title' => 'SEO',
	 //    		'content' => 'Get on first page of search engines with our help.'
	 //  		)
		// );
	}
	
}
?>