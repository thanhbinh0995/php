<?php 
	global $conn; 
	function connect_db()
	{
		global $conn;
		if (!$conn) {
			$conn = mysqli_connect('localhost','root','','qlsv_db');
			mysqli_set_charset($conn,'utf8');
		}
	}
	function disconnect_db()
	{
		global $conn;
		if ($conn){
        	mysqli_close($conn);
    	}
	}
	// Hàm lấy tất cả sinh viên
	function get_all_students()
	{
	    // Gọi tới biến toàn cục $conn
	    global $conn;
	     
	    // Hàm kết nối
	    connect_db();
	     
	    // Câu truy vấn lấy tất cả sinh viên
	    $sql = "select * from tb_sinhvien";
	     
	    // Thực hiện câu truy vấn
	    $query = mysqli_query($conn, $sql);
	     
	    // Mảng chứa kết quả
	    $result = array();
	     
	    // Lặp qua từng record và đưa vào biến kết quả
	    if ($query){
	        while ($row = mysqli_fetch_assoc($query)){
	            $result[] = $row;
	        }
	    }
	     
	    // Trả kết quả về
	    return $result;
	}
	 
	// Hàm lấy sinh viên theo ID
	function get_student($student_id)
	{
	    // Gọi tới biến toàn cục $conn
	    global $conn;
	     
	    // Hàm kết nối
	    connect_db();
	     
	    // Câu truy vấn lấy tất cả sinh viên
	    $sql = "select * from tb_sinhvien where sv_id = {$student_id}";
	     
	    // Thực hiện câu truy vấn
	    $query = mysqli_query($conn, $sql);
	     
	    // Mảng chứa kết quả
	    $result = array();
	     
	    // Nếu có kết quả thì đưa vào biến $result
	    if (mysqli_num_rows($query) > 0){
	        $row = mysqli_fetch_assoc($query);
	        $result = $row;
	    }
	     
	    // Trả kết quả về
	    return $result;
	}
	 
	// Hàm thêm sinh viên
	function add_student($student_name, $student_sex, $student_birthday)
	{
	    // Gọi tới biến toàn cục $conn
	    global $conn;
	     
	    // Hàm kết nối
	    connect_db();
	     
	    // Chống SQL Injection
	    $student_name = addslashes($student_name);
	    $student_sex = addslashes($student_sex);
	    $student_birthday = addslashes($student_birthday);
	     
	    // Câu truy vấn thêm
	    $sql = "
	            INSERT INTO tb_sinhvien(sv_name, sv_sex, sv_birthday) VALUES
	            ('$student_name','$student_sex','$student_birthday')
	    ";
	     
	    // Thực hiện câu truy vấn
	    $query = mysqli_query($conn, $sql);
	     
	    return $query;
	}
	 
	 
	// Hàm sửa sinh viên
	function edit_student($student_id, $student_name, $student_sex, $student_birthday)
	{
	    // Gọi tới biến toàn cục $conn
	    global $conn;
	     
	    // Hàm kết nối
	    connect_db();
	     
	    // Chống SQL Injection
	    $student_name       = addslashes($student_name);
	    $student_sex        = addslashes($student_sex);
	    $student_birthday   = addslashes($student_birthday);
	     
	    // Câu truy sửa
	    $sql = "
	            UPDATE tb_sinhvien SET
	            sv_name = '$student_name',
	            sv_sex = '$student_sex',
	            sv_birthday = '$student_birthday'
	            WHERE sv_id = $student_id
	    ";
	     
	    // Thực hiện câu truy vấn
	    $query = mysqli_query($conn, $sql);
	     
	    return $query;
	}
 
	 
	// Hàm xóa sinh viên
	function delete_student($student_id)
	{
	    // Gọi tới biến toàn cục $conn
	    global $conn;
	     
	    // Hàm kết nối
	    connect_db();
	     
	    // Câu truy sửa
	    $sql = "
	            DELETE FROM tb_sinhvien
	            WHERE sv_id = $student_id
	    ";
	     
	    // Thực hiện câu truy vấn
	    $query = mysqli_query($conn, $sql);
	     
	    return $query;
	}
?>