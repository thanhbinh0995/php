<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>Demo Write to file</title>
	<link rel="stylesheet" href="">
</head>
<body>
	<?php 
		// require ('writeToFile.php');
		// try {
		// 	$fp = new writeToFile('data.txt');
		// 	$fp->write('This is a line of data.');
		// 	$fp->close();
		// 	unset($fp);
		// 	echo "<p>The data has been written</p>";
		// } catch (Exception $e) {
		// 	echo "<p>The process could not be completed because the script: " . $e->getMessage() . "</p>";
		// }
	try {
		$fp = new SplFileObject("data.txt",'w');
		$fp->fwrite('hello guys !!');
		$fp->getrealpath();
		unset($fp);

	} catch (Exception $e) {
		
	}
	?>
</body>
</html>