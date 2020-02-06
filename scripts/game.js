// Processes a CSV file
function processData(allText) {
    var allTextLines = allText.split(/\r\n|\n/);
    var headers = allTextLines[0].split(',');
    var lines = [];

    for (var i = 1; i < allTextLines.length; i++) {
        var data = allTextLines[i].split(',');
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
    var url = "https://raw.githubusercontent.com/Educorreia932/Educorreia932.github.io/master/scripts/games.csv";

    var request = makeHttpObject();
    
    request.open("GET", url, true);
    request.send(null);
    request.onreadystatechange = function () {
        if (request.readyState == 4) {
            var data = processData(request.responseText);
            var table = document.getElementById("games");
            
            // Add games to table
            data.forEach(element => {
                if (element[1] == "Wishlist" || element[1] == "Not played")
                    return;

                // Create an empty <tr> element and add it to the end of the table
                var row = table.insertRow();

                // Insert new cells (<td> elements)
                var name = row.insertCell(0);
                var played_on = row.insertCell(1);
                var hours_played = row.insertCell(2);

                name.innerHTML = element[0];
                played_on.innerHTML = element[2];
                hours_played.innerHTML = element[5] + "h";

                if (element[5] == "\"\"")
                    hours_played.innerHTML = "N/A"
            });
        };
    };
}
