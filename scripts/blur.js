function NSFWblur() {
    var checkBox = document.getElementById("blurCheck");
    var canvas = document.getElementById("stamp-canvas");

    if (checkBox.checked == true)
        canvas.style.filter = "blur(0px)";
    
    else 
        canvas.style.filter = "blur(20px)";
}