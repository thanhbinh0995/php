<?php 
	session_start();
	function getAllStudents() {
		return isset($_SESSION['students']) ? $_SESSION['student'] : array();
	}
	function getStudent() {
		$students = getAllStudents();
		foreach ($students as $item) {
			if ($item['student_id'] == $student_id) {
				return $item;
			}
		}
	}
	function deleteStudent($student_id) {
		$students = getAllStudents();
		foreach ($students as $key => $value) {
			if ($value['student_id'] == $student_id) {
				unset($students[$key]);
			}
		}
		$_SESSION['students'] = $students;
		return $students;
	}
	function updateStudent($student_id, $student_name, $student_email) {
		$students = getAllStudents();
		$new_student = array(
			'student_id' => $student_id,
			'student_name' => $student_name,
			'student_email' => $student_email
		);
		$is_update_action = false;
		foreach ($students as $key => $value) {
			if ($value['student_id'] == $student_id) {
				$students[$key] = $new_student;
				$is_update_action = true;
			}
		}
		if (!$is_update_action) {
			$students[] = $new_student;
		}
		return $students;
	}
?>