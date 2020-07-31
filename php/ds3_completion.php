<?php
    $array = json_decode($_POST["data"]);
    $content = "";

    foreach ($array as $category) {
        foreach ($category as $item) 
            $content .= $category . "_" . $item . PHP_EOL;
    }

    file_put_contents("../data/ds3.txt", $content, FILE_APPEND);
?>