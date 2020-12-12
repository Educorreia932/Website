function readJSON(url) {
	var request = new XMLHttpRequest();

	request.open("GET", url, false); // "false" makes the request synchronous
	request.send(null);

	if (request.status === 200)
		return JSON.parse(request.responseText);
}

const URL = "/data/ds3-data.json"

var ds3_database = readJSON(URL);

function add_items(category) {
	var data = ds3_database[category];
	var id = category.split(" ").join("-").toLowerCase();
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

function loadData() {
	add_items("Undead Bone Shards");
	add_items("Estus Shards");
	add_items("Infusions");
	add_items("Sorceries");
	add_items("Miracles");
	add_items("Pyromancies");
	add_items("Gestures");
	add_items("Rings");
}

function generateJSON() {
	let checks = {};

	$('input[type=checkbox]').each(function () {
		if (this.checked) {
			let name = this.parentNode.innerText;
			let category = $(this).parent("dd").parent("dl").find("dt").text();

			if (checks[category] == null)
				checks[category] = [name];

			else
				checks[category].push(name);
		}
	});

	return checks;
}

function saveFile() {
	var obj = generateJSON();
	var data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(obj));

	$('<a href="data:' + data + '" download="data.json">download JSON</a>').appendTo('#container');
}

function loadFile() {
	var files = document.getElementById("selectFiles").files;
	console.log(files);

	if (files.length <= 0)
		return false;

	var fr = new FileReader();

	fr.onload = function (e) {
		console.log(e);
		var result = JSON.parse(e.target.result);
		var formatted = JSON.stringify(result, null, 2);
		console.log(formatted);
	}

	fr.readAsText(files.item(0));
}
