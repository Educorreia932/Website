var canvas = document.getElementById('scratch');
var context = canvas.getContext('2d');

// Default value
context.globalCompositeOperation = 'source-over';

var image = document.getElementById("map");

var x = 0;
var y = 0;
var width = image.width;
var height = image.height;

canvas.width = width;
canvas.height = height;

function editPrompt() {
    var password = prompt("Please enter the password");

    if (password === "eusouodm")
        canvas.style.opacity = "75%"

}

loadCanvas();

// Array of scratch "holes"
var arcs = new Array();

image.style.visibility = "visible";

//----------------------------------------------------------------------------

var isDrag = false;

function clearArc(x, y) {
    context.globalCompositeOperation = 'destination-out';
    context.beginPath();
    context.arc(x, y, 13, 0, Math.PI * 2, false);
    context.fill();
}

function addArc(x, y) {
    arcs.push([x, y]);
}

canvas.addEventListener('mousedown', function (event) {
    isDrag = true;

    clearArc(event.offsetX, event.offsetY);
    judgeVisible();
}, false);

canvas.addEventListener('mousemove', function (event) {
    if (!isDrag)
        return;

    clearArc(event.offsetX, event.offsetY);
    judgeVisible();
}, false);

canvas.addEventListener('mouseup', function (event) {
    isDrag = false;
}, false);

canvas.addEventListener('mouseleave', function (event) {
    isDrag = false;
}, false);

//----------------------------------------------------------------------------

canvas.addEventListener('touchstart', function (event) {
    if (event.targetTouches.length !== 1)
        return;

    event.preventDefault();

    isDrag = true;

    clearArc(event.touches[0].offsetX, event.touches[0].offsetY);
    judgeVisible();
}, false);

canvas.addEventListener('touchmove', function (event) {
    if (!isDrag || event.targetTouches.length !== 1)
        return;

    event.preventDefault();

    clearArc(event.touches[0].offsetX, event.touches[0].offsetY);
    judgeVisible();
}, false);

canvas.addEventListener('touchend', function (event) {
    isDrag = false;
}, false);

//----------------------------------------------------------------------------

function judgeVisible() {
    var imageData = context.getImageData(x, y, width, height),
        pixels = imageData.data,
        result = {},
        i, len;

    // Count alpha values
    for (i = 3, len = pixels.length; i < len; i += 4) {
        result[pixels[i]] || (result[pixels[i]] = 0);
        result[pixels[i]]++;
    }
}

document.addEventListener('DOMContentLoaded', judgeVisible, false);

function saveCanvas() {
    var data = document.getElementById("scratch").toDataURL();

    $.post("/php/canvas.php", {
        imageData: data
    }, function(data) {
        window.location = data;
    });
}

function loadCanvas() {
    context.globalCompositeOperation = 'source-over';
    context.clearRect(0, 0, canvas.width, canvas.height);
    var image = new Image();

    image.onload = function() {
        context.drawImage(image, x, y);
    };

    image.src = "/php/canvas.png";
}

function fillCanvas() {
    context.globalCompositeOperation = 'source-over';
    context.beginPath();
    context.fillStyle = '#CCCCCC';
    context.rect(x, y, width, height);
    context.fill();
}