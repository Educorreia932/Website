function readJSON(url) {
	var request = new XMLHttpRequest();

	request.open("GET", url, false); // "false" makes the request synchronous
	request.send(null);

	if (request.status === 200)
		return JSON.parse(request.responseText);
}

const URL = "https://gist.githubusercontent.com/Educorreia932/ce7542c367fa4d00904de6dfef4a64ab/raw/542cdbd73ecc54035e744136486fd1817f048e35/ds3-data.json";

var ds3_database = readJSON(URL);

function add_items(category) {
	var data = ds3_database[category];
	var id = category.replace(" ", "-").toLowerCase();
	var checklist = document.getElementById(id);

	for (var i = 0; i < data.length; i++) {
		var dd = document.createElement("dd");
		var check = document.createElement("input");
		check.setAttribute("type", "checkbox");
		dd.appendChild(check);

		dd.innerHTML += data[i];

		checklist.appendChild(dd);
	}
}

function load_data() {
	add_items("Sorceries");
	add_items("Miracles");
	add_items("Pyromancies");
}