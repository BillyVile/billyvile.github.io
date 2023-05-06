<?php
if($_POST){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $to = 'bvile66@gmail.com'; // Your email address
    $subject = 'New message from your website'; // Email subject
    $headers = "From: $name <$email>\r\nReply-To: $email";
    $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";
    mail($to, $subject, $body, $headers); // Send email
}
?>
