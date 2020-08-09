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
	const inputElement = document.getElementById("input");
	inputElement.addEventListener("change", handleFiles, false);

	function handleFiles() {
		const file = this.files[0];
		let reader = new FileReader();
		
		reader.onload = function(event) {
			let content = JSON.Parse(event.target.result);            
		}

		reader.readAsText(file);
	}
}
