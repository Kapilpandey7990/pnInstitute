<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    $selectedOption = $_POST["Select_Class"];
    $contact = $_POST["contact"];

    $to = "info@pninstitute.in"; 
    $subject = "New form submission";
    $headers = "From: $email";

    $emailContent = "Name: $name\n";
    $emailContent .= "Email: $email\n";
    $emailContent .= "Message: $message\n";
    $emailContent .= "Class: $selectedOption\n";
    $emailContent .= "Contact: $contact\n";


    if (mail($to, $subject, $message, $headers)) {
        echo "Message sent successfully.";
    } else {
        echo "Message sending failed.";
    }
}
?>
