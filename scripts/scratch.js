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
        createPolygon(points);
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
