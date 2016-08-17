<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>blog</title>
	<link rel="stylesheet" href="">
</head>
<body>
	<header>
		<div class="container">
			<div class="pull-right">
				@yield('header-right')
			</div>
		</div>
		<h1><a href="/" title="">This is Blog50</a></h1>
		<p class="lead">An example of dynamic web app</p>
	</header><!-- /header -->
	<div class="main">
		<div class="container">
			@yield('content')
		</div>
	</div>
</body>
</html>