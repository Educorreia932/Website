
fetch('/data/stamps.txt')
    .then(response => response.text())
    .then(text => {
        var content = text.split("\n");

        for (var i = 0; i < content.length; i++) {
            var line = content[i].split(" ");

            var img = document.createElement("img");
            img.src = line[0];
            img.style.left = line[1] + "px";
            img.style.top = line[2] + "px";

            document.getElementById("stamp-canvas").appendChild(img);
        }
    })