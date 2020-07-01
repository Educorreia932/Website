<?php session_start(); ?>

<?php 
    include_once $_SERVER['DOCUMENT_ROOT'] . '/securimage/securimage.php';
    include_once $_SERVER['DOCUMENT_ROOT'] . '/php/save_stamp.php';

    $securimage = new Securimage(); 

    if ($securimage->check($_POST['captcha_code']) == true)
        saveStamp();
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

        <p>Enter a valid image URL, its X/Y coordinates, fill the captcha, click on submit and then <b>boom</b> magic will happen.</p>

        <img id="captcha" src="/securimage/securimage_show.php" alt="CAPTCHA Image" />

        <form method="post">
            <input type="text" name="captcha_code" size="10" maxlength="6" value=""/>
            <a href="#" onclick="document.getElementById('captcha').src = '/securimage/securimage_show.php?' + Math.random(); return false">[ Different Image ]</a><br>
            <br>
            <label for="fname">Image URL</label>
            <input type="text" name="url"><br>
            <label for="fname">X Coordinate</label>
            <input type="number" name="x"><br>
            <label for="fname">Y Coordinate</label>
            <input type="number" name="y"><br>
            <br>
            <input type="submit" value="Submit">
        </form>

        <h2>WARNING: Potential <span style="color: red">NSFW</span> material below.</h2>
        <input type="checkbox" id="myCheck" onclick="myFunction()">
        <label for="myCheck">I have no problems with that (remove blur).</label> 

        <script>
            function myFunction() {
                var checkBox = document.getElementById("myCheck");
                var canvas = document.getElementById("canvas");

                if (checkBox.checked == true)
                    canvas.style.filter = "blur(0px)";
                
                else 
                    canvas.style.filter = "blur(20px)";
            }
        </script>

        <!-- Footer -->
        <div id="footer">
            <p>&copy; 2020 Eduardo Correia</p>
        </div>

        <hr>

        <script src="../scripts/display-stamps.js"></script>

        <div id="canvas"></div>

    </body>
</html>



