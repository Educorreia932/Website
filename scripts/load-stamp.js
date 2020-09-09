var listener;

function loadStamp() {
    var input = document.getElementById("url-input");
    var url = input.value;
    
    // Clear input 
    input.value = "";

    // Check if image is valid 
    // TODO: Change to a more robust verification
    if (url.match(/\.(jpeg|jpg|gif|png)$/) != null) {
        var stamp = document.createElement("img");
        stamp.src = url;

        var canvas = document.getElementById("stamp-canvas");

        stamp.onclick = function() {
            var x = stamp.style.left;
            var y = stamp.style.top;
            var url = stamp.src;

            stamp.remove();

            const data = {
                x: x.slice(0, -2),
                y: y.slice(0, -2),
                url: url
            };

            const searchParams = new URLSearchParams(data).toString();

            window.open("../php/stamp_submit.php?" + searchParams, "_self");
        };

        canvas.appendChild(stamp);
        
        canvas.style.filter = "blur(0px)";

        var div = document.getElementById('stamp-canvas');
        
        div.addEventListener('mouseenter', function() {
            var el = document.getElementById("stamp-canvas");
            var rect = el.getBoundingClientRect();
            var top = rect.top + window.pageYOffset;
            var left = rect.left + window.pageXOffset;

            listener = function (event) {
                stamp.style.left = event.pageX -left + "px" ;
                stamp.style.top = event.pageY - top  + "px" ;
            };
            
            document.addEventListener("mousemove", listener);
        }, false);

        div.addEventListener('mouseleave', function() {
            document.removeEventListener("mousemove", listener);
        }, false);

        return;
    }
        
    else
        alert("Not a valid URL");
}