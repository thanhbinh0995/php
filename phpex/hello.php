<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>Hello World</title>
	<link rel="stylesheet" href="">
</head>
<body>
	<?php 
		$conn = mysqli_connect('localhost','root','');
		if (!$conn) {
			die ('ket noi that bai'. mysqli_connect_error());
		}
		mysqli_select_db($conn, 'freetuts');
		$sql = 'CREATE TABLE test (
			id INT(6) unsigned auto_increment primary key,
			title VARCHAR(30) not null,
			content text,
			add_date TIMESTAMP
		)';
		if (mysqli_query($conn, $sql)) {
			echo "create table completed";
			$sql = 'insert into news (title, content) values (?,?)';
			$stmt = $conn->prepare($sql);
			$stmt->bind_param('ss',$title, $content);

			$stmt->execute();
		} else {
			echo "create table not completed" .mysqli_connect_error();
		}
		
		mysqli_close($conn);
	?>	
</body>
</html>