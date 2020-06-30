<?php
    function goBack() {
        header("Location: https://educorreia932.dev/html/collage.html");
        die();
    }

    $url = $_POST["url"];

    // Check if the link corresponds to an image

    $headers = get_headers($url, 1);
    
    if (strpos($headers['Content-Type'], 'image/') === false)
        goBack();
    
    $x = $_POST["x"];
    $y = $_POST["y"];

    // Invalid coordinates

    if ($x > 1000 || $y > 1000)
        goBack();

    // See if image was already uploaded

    $matches = array();

    $handle = @fopen("../data/stamps.txt", "r");

    if ($handle) {
        while (!feof($handle)) {
            $buffer = fgets($handle);

            if (strpos($buffer, $url . " ") !== FALSE)
                $matches[] = $buffer;
        }

        fclose($handle);
    }

    if (sizeof($matches) != 0) {
        header("Location: https://educorreia932.dev/html/collage.html");
        die();
    }

    $stamp = $url . " " . $x . " " . $y . "\n";

    // file_put_contents("../data/stamps.txt", $stamp, FILE_APPEND);

    goBack();
?>