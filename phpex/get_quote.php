<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>Get stock quotes</title>
	<link rel="stylesheet" href="">
</head>
<body>
	<?php 
		if (isset($_GET['symbol']) && !empty($_GET['symbol'])) {
			$url =sprintf('http://quote.yahoo.com/d/quotes.csv?s=%s&f=nl1', $_GET['symbol']);
			$fp = fopen($url, 'r');
			$read = fgetcsv($fp);
			fclose($fp);
			if (strcasecmp($read[0], $_GET['symbol']) !== 0) {
				echo "<div>The latest value for <span class='quote'>".$read[0]."</span><span class='quote'>".$_GET['symbol']. "</span> is <span>".$read[1]. "</span></div>";
			} else {
				echo "<div class='error'>Invalid symbol</div>";
			}
		}

	?>
	<form action="get_quote.php" method="get" accept-charset="utf-8">
		<fieldset>
			<legend>Enter a NYSE </legend>
			<p><label for="symbol">Symbol</label>: <input type="text" name="symbol" size="5" maxlength="5"></p>
			<p><input type="submit" name="submit" value="Fetch the quote"></p>
		</fieldset>
	</form>
</body>
</html>