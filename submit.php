<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    
    // Set up your email address where you want to receive messages
    $to = "tyshawnandrews3";
    $subject = "Message from Portfolio Contact Form";
    $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";
    
    // Send email
    if (mail($to, $subject, $body)) {
        echo "Thank you! Your message has been sent.";
    } else {
        echo "Oops! Something went wrong and we couldn't send your message.";
    }
} else {
    echo "There was a problem with your submission, please try again.";
}
?>
