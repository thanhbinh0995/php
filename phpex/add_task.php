<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>add task</title>
	<link rel="stylesheet" href="">
</head>
<body>
	<?php 
		mysqli_connect("localhost","root","","task");
		if (($_SERVER['REQUEST_METHOD'] == 'POST') && !empty($_POST['task'])) {
			if (isset($_POST['task']) && filter_var($_POST['parent_id'], FILTER_VALIDATE_INT, array('min_range' => 1))) {
				$parent_id = $_POST['parent_id'];
			} else {
				$parent_id = 0;
			}
			$task = mysqli_real_escape_string($dbc, strip_tags($_POST['task']));
			$q = 'INSERT INTO tasks (parent_id, task) VALUES ($parent_id, "$task")';
			$r = mysqli_query($dbc, $q);
			if (mysqii_affected_rows($dbc) == 1) {
				echo "<p> the task has been added</p>";
			} else {
				echo "<p>the task could not be added</p>";
			}

		}
		echo '<form action="add_task.php" method="post" accept-charset="utf-8">
			<fieldset>
				<legend>add a task</legend>
				<p>Task: <input type="text" size="60" name="task" maxlength="100" required></p>
			</fieldset>
		</form>';


	?>
</body>
</html>