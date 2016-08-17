<?php 
	class writeToFile
	{
		private $_fp= NULL;
		function __construct($file)
		{
			if (!file_exists($file) || !is_file($file)) {
				throw new Exception("The file does not exists");
			}
			if ($this->_fp = @fopen($file, 'w')) {
				throw new Exception("Could not open the file");
			}
		}
		function write($data) {
			if (@!fwrite($this->_fp, $data."\n")) {
				throw new Exception("Could not write to the file");
			}
		}
		function close() {
			if ($this->_fp) {
				fclose($this->_fp);
				$this->_fp = NULL;
			}
		}
		function __destruct() {
			$this->close();
		}
	}


?>