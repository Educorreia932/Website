<?php session_start(); ?>

<?php 
    include_once $_SERVER['DOCUMENT_ROOT'] . '/securimage/securimage.php';
    include_once $_SERVER['DOCUMENT_ROOT'] . '/php/save_stamp.php';

    $securimage = new Securimage(); 

    if (isset($_POST['captcha_code']) && $securimage->check($_POST['captcha_code']) == true) {
        $x = $_GET["x"];
        $y = $_GET["y"];
        $url = $_GET["url"];

        saveStamp($x, $y, $url);
    }
?>

<!DOCTYPE html>
<html>
    <head>
        <title>Submission</title>
        <link rel="stylesheet" type="text/css" href="../style/new.css">
    </head>
    
    <body>
        <h1>Submission</h2>

        <img id="captcha" src="/securimage/securimage_show.php" alt="CAPTCHA Image" />

        <form method="post">
            <input type="text" name="captcha_code" size="10" maxlength="6" value=""/>
            <a href="#" onclick="document.getElementById('captcha').src = '/securimage/securimage_show.php?' + Math.random(); return false">[ Different Image ]</a><br>
            <input type="submit" value="Submit">
        </form>
    </body>
</html>