<?php 
	function class_loader($class) {
		require ('classes'.$class.'.php');
	}
	sql_autoload_register('class_loader');
	session_start();
	$user = (isset($_SESSION['user'])) ? $_SESSION['user'] : null;
	try {
		$pdo = new PDO('mysql:dbname=cms;host=localhost','root','');
	} catch(PDOException $e) {
		$pageTitle = 'Error';
		include ('includes/header.inc.php');
		include ('views/error.htlm');
		include ('includes/footer.inc.php');
	}
?>