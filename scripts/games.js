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
                var rating = row.insertCell(1);
                var played_on = row.insertCell(2);
                var hours_played = row.insertCell(3);

                name.innerHTML = element[0] + '<img src="img/Games Covers/' + element[0] + '.png">';
                rating.innerHTML = element[3];
                played_on.innerHTML = element[2];
                hours_played.innerHTML = element[5] + "h";

                if (element[5] == "")
                    hours_played.innerHTML = "N/A"
            });
        };
    };
}

function sortTable(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("games");
    switching = true;
    
    //Set the sorting direction to ascending:
    dir = "asc";
    
    /*Make a loop that will continue until no switching has been done:*/
    while (switching) {
        //start by saying: no switching is done:
        switching = false;
        rows = table.getElementsByTagName("TR");

        /*Loop through all table rows (except the
        first, which contains table headers):*/
        for (i = 1; i < (rows.length - 1); i++) {
            //start by saying there should be no switching:
            shouldSwitch = false;
            /*Get the two elements you want to compare,
            one from current row and one from the next:*/
            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i + 1].getElementsByTagName("TD")[n];
            /*check if the two rows should switch place,
            based on the direction, asc or desc:*/
            if (dir == "asc") {
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    //if so, mark as a switch and break the loop:
                    shouldSwitch = true;
                    break;
                }
            } 
            
            else if (dir == "desc") {
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    //if so, mark as a switch and break the loop:
                    shouldSwitch = true;
                    break;
                }
            }
        }

        if (shouldSwitch) {
            /*If a switch has been marked, make the switch and mark that a switch has been done:*/
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            //Each time a switch is done, increase this count by 1:
            switchcount++;
        } 
        
        else {
            /*If no switching has been done AND the direction is "asc", set the direction to "desc" and run the while loop again.*/
            if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
            }
        }
    }
}