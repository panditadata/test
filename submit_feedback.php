<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // Include PHPMailer library

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $email = $_POST['email'];
    $rating = $_POST['rating'];
    $opinion = $_POST['opinion'];

    // Create a new PHPMailer instance
    $mail = new PHPMailer(true);

    try {
        // SMTP configuration
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'https://panditadata.com'; // Your email address
        $mail->Password = ; // Your email password
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;

        // Email content
        $mail->setFrom('panditadata@gmail.com', 'Panditadata');
        $mail->addAddress('recipient@example.com', 'Recipient Name'); // Email address to receive feedback
        $mail->isHTML(true);
        $mail->Subject = 'Feedback from Website';
        $mail->Body = "Email: $email<br>Rating: $rating<br>Opinion: $opinion";

        // Send email
        $mail->send();
        echo 'Feedback sent successfully!';
    } catch (Exception $e) {
        echo "Error sending feedback: {$mail->ErrorInfo}";
    }
}
?>
