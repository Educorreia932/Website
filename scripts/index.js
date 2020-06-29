document.addEventListener("mousemove", e => {
    document.getElementById("output").style.left = e.pageX + "px";
    document.getElementById("output").style.top = e.pageY + "px";
});

