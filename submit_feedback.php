<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Check if the form is submitted using the POST method

// Collect form data
    $rating = $_POST['rating'];
    $feedback_text = $_POST['feedback_text'];
    
// Database connection parameters
$servername = "root@localhost";
$username = "panditadata";
$password = "Dubai123!@#";
$dbname = "mysql";

// Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Sanitize input (to prevent SQL injection)
    $rating = $conn->real_escape_string($rating);
    $feedback_text = $conn->real_escape_string($feedback_text);

    // Insert feedback into database
    $sql = "INSERT INTO feedback (rating, feedback_text) VALUES ('$rating', '$feedback_text')";

    if ($conn->query($sql) === TRUE) {
        echo "Feedback submitted successfully!";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    // Close connection
    $conn->close();
}
?>

