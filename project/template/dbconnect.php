<?php
	$con = mysqli_connect("localhost","root","","project");
	if (!$con) {
		die('not to connected'.$mysql_error());
	}
?>