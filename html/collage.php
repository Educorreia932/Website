<?php session_start(); ?>

<?php 
    include_once $_SERVER['DOCUMENT_ROOT'] . '/securimage/securimage.php';

    $securimage = new Securimage(); 

    if ($securimage->check($_POST['captcha_code']) == true) {
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
    
        if (sizeof($matches) != 0)
            goBack();
    
        $stamp = $url . " " . $x . " " . $y . "\n";
    
        file_put_contents("../data/stamps.txt", $stamp, FILE_APPEND);
    
        goBack();

        exit;
    }
?>

<!DOCTYPE html>
<html>
    <head>
        <title>A Beautiful Internet Collage</title>
        <link rel="stylesheet" type="text/css" href="../style/new.css">
        <link rel="stylesheet" type="text/css" href="../style/collage.css">
        <link rel="icon" href="../img/Avatar.png">
    </head>

    <body>
        <h1>A <del>Beautiful</del> Internet Collage</h1>

        <p>This webpage is an collaborative experiment, much like <a href="https://www.reddit.com/r/place/" target="_blank">r/place</a>, where you submit an image to go along with the already existing ones to form a <del>beautiful</del> collage.</p>

        <p>There are no restrictrions to the images you may submit... so far.</p>
        
        <h2>Instructions</h2>

        <p>Enter a valid image URL, its X/Y coordinates, click on submit and then <b>boom</b> magic will happen.</p>

        <img id="captcha" src="/securimage/securimage_show.php" alt="CAPTCHA Image" />

        <form action="" method="post">
            <input type="text" name="captcha_code" size="10" maxlength="6" value=""/>
            <a href="#" onclick="document.getElementById('captcha').src = '/securimage/securimage_show.php?' + Math.random(); return false">[ Different Image ]</a><br>
            <br>
            <label for="fname">Image URL</label><br>
            <input type="text" name="url"><br>
            <label for="fname">X Coordinate</label><br>
            <input type="number" name="x"><br>
            <label for="fname">Y Coordinate</label><br>
            <input type="number" name="y"><br>
            <input type="submit" value="Submit">
        </form>

        <h2>WARNING: Potential <span style="color: red">NSFW</span> material below.</h2>

        <!-- <script>
            var image;

            var loadFile = function(event) {
                image = document.getElementById("stamp");
                image.src = URL.createObjectURL(event.target.files[0]);
                image.alt = event.target.files[0].name;
                document.getElementById("clickable").href += "&alt=" + image.alt;
            }

            document.addEventListener("mousemove", e => {
                if (image != null) {
                    document.getElementById("output").style.left = e.pageX - 10 + "px" ;
                    document.getElementById("output").style.top = e.pageY - 10 + "px" ;
                }
            });
        </script> -->

        <hr>

        <script src="../scripts/display-stamps.js"></script>

        <div id="canvas"></div>
    </body>
</html>



