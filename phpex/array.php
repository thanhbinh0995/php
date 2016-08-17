<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>Array</title>
	<link rel="stylesheet" href="">
</head>
<body>
	<?php 
		$student = array(
			256 => array('name' => 'Jon', 'grade'=>98.5),
			2=>array('name'=>'Vance', 'grade' => 84.2),
			86=>array('name'=>'Rob', 'grade' => 71.2),
			44=>array('name'=>'Steve', 'grade' => 24.2)
		);
		function name_sort ($x, $y) {
			static $count = 1;
			echo "<p>Iteration $count: {$x['name']} vs. {$y['name']} </p> \n";
			$count++;
			return strcasecmp($x['name'], $y['name']);
		}
		function grade_sort ($x, $y) {
			// global $count = 1;
			echo "<p>Iteration $count: {$x['grade']} vs. {$y['grade']}</p>\n";      
			$count++;
			return ($x['grade'] < $y['grade']);
		}
		uasort($student, 'name_sort');
		echo '<h2> Array sort by name' .print_r($student,1). '<h2>';
		uasort($student, 'grade_sort');
		echo '<h2> Array sort by grade' .print_r($student). '<h2>';
		
	?>
</body>
</html>