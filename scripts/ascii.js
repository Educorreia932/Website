var ascii = [
    "1015.js",
    "1017.js",
    "1024.js",
    "1060.js"
]

var current = 0;

function changeASCII() {
    current = (current + 1) % ascii.length;

    var gif = ascii[current];
    var s = document.createElement("script");

    s.type = "text/javascript";
    s.src = "gif/" + gif;
    s.innerHTML = null;
    s.id = "ascii-art";

    document.getElementById("ascii-art").remove();
    document.getElementById("ascii-display").appendChild(s);
}