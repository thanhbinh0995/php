<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title><?php echo (isset($pageTitle)) ? $pageTitle : 'Some Content Site'; ?></title>
	<link rel="stylesheet" href="">
</head>
<body>
	<header id="header" class="">
		<h1>Content Site</h1>
		<nav>
			<ul>
				<li><a href="index.php" title="">Home</a></li>
				<li><a href="#" title="">Archives</a></li>
				<li><a href="contact.php" title="">Contact</a></li>
				<li><?php if ($user) {echo "<a href='logout.php'>Logout</a>";} else {
					echo "<a href='login.php'></a>";
					} ?>
				</li>
				<li><a href="#" title="">Register</a></li>
			</ul>
		</nav>
	</header><!-- /header -->
</body>
</html>