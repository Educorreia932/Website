function hideRegion(regionID) {
    let region = document.getElementById(regionID);
    region.style.visibility = "hidden";
}

var points = new Array();

var lastPolygonID = 1;

var listener = function(event) {
    let coordinates= [event.clientX, event.clientY];
    points.push(coordinates);
};

function drawPolygon() {
    if (points.length == 0)
        document.addEventListener("click", listener);

    else {
        points.shift(); // First point added was of clicking the button
        document.removeEventListener("click", listener);
        saveRegion(points);
        points = new Array();
    }
}

function createPolygon(points) {
    var svg = document.getElementsByTagName("svg")[0];
    var polygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
    lastPolygonID++;

    for (value of points) {
        let point = svg.createSVGPoint();
        point.x = value[0];
        point.y = value[1];
        polygon.points.appendItem(point);
        polygon.id = "region" + lastPolygonID;
        polygon.setAttribute("onclick",  "hideRegion('" + polygon.id + "')");
        polygon.style.visibility = "visible";
    } 

    svg.appendChild(polygon);
}

function saveRegion(points) {
    let data = "";

    for (value of points)
        data += value[0] + " " + value[1] + " ";

    $.post("/php/regions.php", {
        data: data
    });
}

function loadRegions() {
    fetch('/data/regions.txt')
    .then(response => response.text())
    .then(text => { 
        let content = text.split("\n");

        // Iterate over file lines
        for (let i = 0; i < content.length; i++) {
            let line = content[i].split(" ");
            let points = groupTwoByTwo(line);
            console.log(points)
            createPolygon(points);
        }
    })
}

function groupTwoByTwo(array) {
    let result = new Array();

    for (let i = 0; i < array.length - 1; i += 2)
        result.push([array[i], array[i + 1]])

    return result;
}

loadRegions();
