function readJSON(url) {
	let request = new XMLHttpRequest();

	request.addEventListener("load", function() {
        display_kaomoji(
            element,
            request.status,
            request.responseText
        )
    });
	request.open("GET", url, true);
	request.send(null);

	if (request.status === 200)
		return JSON.parse(request.responseText);
}

const URL = "https://gist.githubusercontent.com/Educorreia932/9b96b1f6823804523d1a4c3d61012462/raw/010e9878b6a75a62ba682030a116ee74946bfd51/kaomoji.json";

let kaomoji_database = readJSON(URL)["kaomoji"];

function display_kaomoji(category) {
	let caterogy_kaomoji = kaomoji_database[category];

    // Chooses a random kaomoji from the category in question
    index = Math.floor(Math.random() * caterogy_kaomoji.length);
	let kaomoji = caterogy_kaomoji[index];

    document.getElementById("kaomoji").innerHTML = kaomoji;
}
