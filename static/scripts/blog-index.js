for (var i = 0; i < files.length; i++) {
    var a = document.createElement("a");
    a.href = "/html/blog/" + files[i] + ".html";
    a.innerHTML = files[i];

    document.getElementById("blog-index").appendChild(a);          
    document.getElementById("blog-index").innerHTML += "<br>";     
}
