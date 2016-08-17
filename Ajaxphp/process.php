<?php 
header('Content-Type: text/xml');
/* Database variable */
$host = "localhost";
$database = "dulieu";
$username = "root";
$pass = "";

/* function library */
function connectToDataServer()
{
	global $host, $username, $pass;
	return mysql_connect($host,$username,$pass);
}
function generateXMLResult($MethodName, $value)
{
	print "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>";
	print "<response>";
	print "<method>".$MethodName."</method>";
	print "<result>".$value."</result>";
	print "</response>";
}
function checkName($name)
{
	global $database;
	$error = true;
	$link = connectToDataServer();
	mysql_select_db($database);
	if ($name != "")
	{
		$SQLString = "SELECT name FROM ajax_example WHERE name='".$name."'";
		$result = mysql_query($SQLString);
		if (mysql_num_rows($result) == 0) // if no one has the same email
		{
			$error = false;
		}
	}
	if($error) //there is an error
	{
	generateXMLResult("checkName",0); 
	}
	else //succeed
	{   
	generateXMLResult("checkName",1); 
	}
	}

function check_email_format($email) {
//  if (!eregi("[^@]+@[^\.]+(\.[A-Za-z0-9]{3,4}){1,2}",$email))
//  	return false;
	$EmailSections = explode("@", $email);
	$Email_ID = $EmailSections[0];
	$Email_Domain = $EmailSections[1];

	if (count($EmailSections) != 2)
		return false;
	if (substr_count($Email_ID,".") > 1)
		return false;
	if (substr_count($Email_Domain,".") > 2)
		return false;	
  	return true;
}

function checkEmail($email)
{
	global $database;
	$error = true;
	$link = connectToDataServer();
	mysql_select_db($database);
	if ($email != "")
	{
		$SQLString = "SELECT name FROM ajax_example WHERE email='".$email."'";
		$result = mysql_query($SQLString);

		if (check_email_format($email) &&(mysql_num_rows($result) == 0)) // if no one has the same email
		{
			$error = false;
		}
	}
	if($error) //there is an error
	{	generateXMLResult("checkEmail",0); }
	else //succeed
	{   generateXMLResult("checkEmail",1); }
}

function insert($name, $email)
{
	global $database;
	$error = true;
	$link = connectToDataServer();
	mysql_select_db($database);
	if (($name!="") && ($email!=""))
	{
		$SQLString = "INSERT INTO ajax_example(name, email) VALUES('".$name."','".$email."')";
		if(mysql_query($SQLString))	// if add successfully
		{ 
			$error=false; 
		}
	}
	if($error) //there is an error
	{	generateXMLResult("addNew",0); }
	else //succeed
	{   generateXMLResult("addNew",1); }
}

$task = $_GET["task"];
$query = $_GET["q"];
$name = $_GET["name"];
$email = $_GET["email"];
if ($task!="")
{
	switch($task)
	{
		case '1':
			checkName($query);
			break;
		case '2':
			checkEmail($query);
			break;
		case '3':
			insert($name, $email);
			break;
	}
}
?>