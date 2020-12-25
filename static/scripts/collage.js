let canvas = document.getElementById("stamp-canvas");
let stamp;

function encodeForAjax(data) {
    return Object.keys(data).map(function(k){
        return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
    }).join('&')
}

function submitStamp() {
    stamp = document.createElement("img");

    stamp.src = document.getElementById("image-url").value;
    stamp.addEventListener("click", placeStamp);

    document.addEventListener("mousemove", moveStamp, true)

    canvas.append(stamp);
}

function placeStamp() {
    let x = parseInt(this.style.left);
    let y = parseInt(this.style.top);
    let image_url = this.src;

    let request = new XMLHttpRequest();

    request.addEventListener("load", function() {
        document.removeEventListener("mousemove", moveStamp, true)
    });

    request.open("POST", "submit_stamp", true);
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    request.send(
        encodeForAjax({
            x: x,
            y: y,
            image_url: image_url
        })
    );
}

function moveStamp(e) {
    const rect = canvas.getBoundingClientRect();

    const top = rect.top + window.pageYOffset;
    const left = rect.left + window.pageXOffset;

    if (e.pageX - left >= 0 && e.pageY - top >= 0) {
        stamp.style.left = e.pageX - left + "px";
        stamp.style.top = e.pageY - top + "px";
    }
}
