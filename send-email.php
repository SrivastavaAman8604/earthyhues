<?php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    $name = $data['name'];
    $email = $data['email'];
    $message = $data['message'];

    // Load PHPMailer
    require 'vendor/autoload.php';

    // Create a new PHPMailer instance
    $mail = new PHPMailer\PHPMailer\PHPMailer();

    // Set up SMTP
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';  // SMTP server
    $mail->SMTPAuth = true;
    $mail->Username = 'your-email@gmail.com';  // SMTP username (your Gmail email)
    $mail->Password = 'your-password';  // SMTP password (your Gmail password)
    $mail->SMTPSecure = 'tls';
    $mail->Port = 587;

    // Set email format to HTML
    $mail->isHTML(true);

    // Set email parameters
    $mail->setFrom('your-email@gmail.com', 'Your Name');  // Sender email and name
    $mail->addAddress('aman.srivastava2639@gmail.com', 'Hotel Runway Inn');  // Recipient email and name
    $mail->Subject = 'New Contact Form Submission';
    $mail->Body = "Name: $name<br>Email: $email<br>Message: $message";

    // Send email
    if ($mail->send()) {
        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['error' => 'Failed to send email']);
    }
} else {
    echo json_encode(['error' => 'Invalid request method']);
}
?>
