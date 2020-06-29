<?php
    $url = basename($_POST["url"]);
    $x = $_POST["x"];
    $y = $_POST["y"];

    exec($cmd);

    file_put_contents("data/stamps.txt", $url . " " . $x . " " . $y . "\n" , FILE_APPEND);

    header("Location: https://web.fe.up.pt/~up201806433/");
    die();
?>