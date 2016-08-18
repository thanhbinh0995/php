<?php 
	class DB_driver {
		private $__conn;
		function connect() {
			if (!$this->__conn) {
				$this->__conn = mysqli_connect('localhost','root','','test') or die('loi ket noi');
				mysqli_query($this->__conn,"SET character_set_results = 'utf8', character_set_client = 'utf8', character_set_database = 'utf8', character_set_server = 'utf8'");
			}
		}
		function dis_connect() {
			if ($this->__conn) {
				mysqli_close($this->__conn);
			}
		}
		function insert($table, $data) {
			$this->connect();
			$field_list = '';
			$value_list = '';
			foreach ($data as $key => $value) {
				$field_list .= ',$key';
				$value_list .= ",'".mysql_escape_string($value)."'";
			}
			$sql = 'INSERT INTO' .$table.'('.trim($field_list,',').') VALUES (' .trim($value_list,',').')';
			return mysqli_query($this->__conn,$sql);
		}
		function update($table, $data, $where) {
			$this->connect();
			$sql = '';
			foreach ($data as $key => $value) {
				$sql .= "$key = '" .mysql_escape_string($value) ."',";
				$sql = 'UPDATE '.$table.' SET '.trim($sql,',') . ' WHERE ' . $where;
			}
			return mysqli_query($this->__conn,$sql);
		}
		function remove($table, $where) {
			 $this->connect();
		    $sql = "DELETE FROM $table WHERE $where";
		    return mysqli_query($this->__conn, $sql);
		}
		function get_list($table, $select, $where) {

		}
		function get_row($table, $select, $where) {

		}
 	}

?>