<?php
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $feedback = $_POST['txtMessage'];

    // Set the recipient email address
    $to = "panditadata@gmail.com";

    // Set the email subject
    $subject = "Feedback from Panditadata Website";

    // Set the email message
    $message = "Feedback: " . $feedback;

    // Set the headers
    
   // $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    // Send the email
    if (mail($to, $subject, $message)) {
        echo "Feedback submitted successfully, Panditadata is Happy (:!";
    } else {
        echo "Error submitting feedback. Panditadata is sad );!";
    }
}
?>