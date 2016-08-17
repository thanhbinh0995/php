<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>PDO example</title>
	<link rel="stylesheet" href="">
</head>
<body>
	<?php  
		try {
			$conn = new PDO("mysql:dbname=freetuts;host=localhost","root","");
			//thiet lap che do loi
			$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

			// $q = "select * from hocvien";
			// $conn->exec($sql);
			// $last_id = $conn->lastInsertId();
			// $conn->beginTransaction();
			$sql = 'insert into news (title, content) values (:title, :content)';
			$stmt = $conn->prepare($sql);
			$stmt->bindParam(':title',$title);
			$stmt->bindParam(':content',$content);
			$title = 'tieu de 1';
			$content = 'noi dung 1';
			$stmt->execute();


		} catch (PDOException $e) {
			echo "<p>An errpr occurred: " . $e->getMessage() . " </p>";
		}
		$conn = null;
	?>
</body>
</html>