<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>IP Geolocation</title>
	<link rel="stylesheet" href="">
</head>
<body>
<?php 
	function show_ip_info($ip){
		$url = 'http://freegeoip.net/csv/' . $ip;
		$fp = fopen($url, 'r');
		$read = fgetcsv($fp);
		fclose($fp);
		echo "<p>IP address : $ip<br>
			Country: $read[2] <br>
			City, State: $read[5], $read[3] <br>
			Latitude: $read[7]<br>
			Longitude: $read[8] 
		</p>";
	}
	echo "<h2>info about you</h2>";
	show_ip_info($_SERVER['REMOTE_ADDR']);
	$url = 'www.entroy.ch';
	echo "<h2>info about the URL $url</h2>";
	show_ip_info($url);
?>
</body>
</html>