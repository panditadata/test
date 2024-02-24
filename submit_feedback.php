<?php
// database connection code
if(isset($_POST['txtEmail']))
{
// $con = mysqli_connect('localhost', 'database_user', 'database_password','database');
$con = mysqli_connect('localhost', 'root', '','db_connect');

// get the post records


$txtEmail = $_POST['txtEmail'];

$txtMessage = $_POST['txtMessage'];

// database insert SQL code
$sql = "INSERT INTO `tbl_contact` (`Id`, `fldEmail`, `fldMessage`) VALUES ('0', '$txtEmail', '$txtMessage')";

// insert in database 
$rs = mysqli_query($con, $sql);
if($rs)
{
	echo "Feedback sent to Panditadata";
}
}
else
{
	echo "Panditadata not happy";
	
}
?>