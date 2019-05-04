<?php 
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $name = $_POST['name'];
    $message = $_POST['emailtext'];

    $subject = "=?utf-8?B?".base64_encode("Сообщение с сайта")."?=";
    $headers = "From: $email\r\nReply-to: $email\r\nContent-type: text/html; charset=utf-8\r\n";

    $success = mail("artemsedl99@gmail.com", $subject, $message, $headers);
    echo $success;
?>