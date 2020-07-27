<?php
    $data = $_POST["data"] . PHP_EOL;
    file_put_contents("../data/regions.txt", $data, FILE_APPEND);
?>

