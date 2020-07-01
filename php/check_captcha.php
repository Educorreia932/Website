<?php session_start(); ?>

<?php 
    include_once $_SERVER['DOCUMENT_ROOT'] . '/securimage/securimage.php';
    include_once $_SERVER['DOCUMENT_ROOT'] . '/php/save_stamp.php';

    $securimage = new Securimage(); 

    if ($securimage->check($_POST['captcha_code']) == true)
        saveStamp();
?>