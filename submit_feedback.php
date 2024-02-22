<?php
// database connection code
if(isset($_POST['txtName']))
{
// $con = mysqli_connect('localhost', 'database_user', 'database_password','database');
$con = mysqli_connect('localhost', 'root', '','db_connect');

// get the post records

$txtID = $_POST['rating'];
$txtFeedback = $_POST['opinion'];


// database insert SQL code
$sql = "INSERT INTO `panditadata_contact` (`fldRate`, `fldFeedback`) VALUES ('0', '$txtID', '$txtFeedback', '$txtPhone', '$txtMessage')";

// insert in database 
$rs = mysqli_query($con, $sql);
if($rs)
{
	echo "Contact Records Inserted";
}
}
else
{
	echo "Are you a genuine visitor?";
	
}
?>