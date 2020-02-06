// Processes a CSV file
function processData(allText) {
    var allTextLines = allText.split(/\r\n|\n/);
    var headers = allTextLines[0].split(',');
    var lines = [];

    for (var i = 1; i < allTextLines.length; i++) {
        var data = allTextLines[i].split(',');

            console.log(i);

            var tarr = [];

            for (var j = 0; j < headers.length; j++)
                tarr.push(data[j]);

            lines.push(tarr);
    }

    return lines;
}

function makeHttpObject() {
    try {
        return new XMLHttpRequest();
    } 
    
    catch (error) {}
    
    try {
        return new ActiveXObject("Msxml2.XMLHTTP");
    } 
    
    catch (error) {}
    
    try {
        return new ActiveXObject("Microsoft.XMLHTTP");
    } 
    
    catch (error) {}

    throw new Error("Could not create HTTP request object.");
}

// Reading data in utf-8 format. 
// Instead of 'utf-8' it can be other character set also like 'ascii' 
function generateList() {
    var url = "https://gist.githubusercontent.com/Educorreia932/e3262777c6719659c81b12663aa581d3/raw/c41ce8ad83e5dd332d2a59cfb3043bd622c4842c/games.csv";

    var request = makeHttpObject();
    
    request.open("GET", url, true);
    request.send(null);
    request.onreadystatechange = function () {
        if (request.readyState == 4) {
            var data = processData(request.responseText);
            console.log(data);
            
            data.forEach(element => {
                var node = document.createElement("li");
                var text_node = document.createTextNode(element[0]);
                node.appendChild(text_node);   
                document.getElementById("games").appendChild(node);
            });
        };
    };
}
