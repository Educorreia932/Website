
const CORRESPONDENCE = {
	0: "cantrips",
	1: "first-level",
	2: "second-level",
	3: "third-level",
	4: "fourth-level",
	5: "fifth-level",
	6: "sixth-level",
	7: "seventh-level",
	8: "eigth-level",
	9: "ninth-level"
}

function readSpells(url) {
	var request = new XMLHttpRequest();

	request.open("GET", url, false); // "false" makes the request synchronous
	request.send(null);

	if (request.status === 200) {
		return JSON.parse(request.responseText);
	}
}

const URL = "https://gist.githubusercontent.com/Educorreia932/198f87a438a6bd285de2805fbe2c89ae/raw/386f3df48624b78c0fc9dedd22733e122ab783ba/spells.json";

var spells = readSpells(URL);

// Dice

var first_dice = Math.floor((Math.random() * 100) + 1); // Returns a random number between 1 and 100
var second_dice = Math.floor((Math.random() * 100) + 1);

var beneficial_properties = [
	"While attuned to the artifact, you gain proficiency in one skill of the DM's choice.",
	"While attuned to the artifact, you are immune to disease.",
	"While attuned to the artifact, you can't be charmed or frightened.",
	"While attuned to the artifact, you have resistance against one damage type of the DM's choice.",
	"While attuned to the artifact, you can use an action to cast one cantrip from it.",
	"While attuned to the artifact, you can use an action to cast one 1st-level spell from it. After you cast the spell, roll a d6. On a roll of 1-5, you can't cast it again until the next dawn.",
	"While attuned to the artifact, you can use an action to cast one 2nd-level spell from it. After you cast the spell, roll a d6. On a roll of 1-5, you can't cast it again until the next dawn.",
	"While attuned to the artifact, you can use an action to cast one 3rd-level spell from it. After you cast the spell, roll a d6. On a roll of 1-5, you can't cast it again until the next dawn.",
	"While attuned to the artifact, you gain a +1 bonus to Armor Class."
]

var detrimental_properties = [
	"While attuned to the artifact, you have disadvantage onsaving throws against spells.",
	"The first time you touch a gem or piece of jewelry whileattuned to this artifact, the value of the gem or jewelry isreduced by half.",
	"While attuned to the artifact, you are blinded when you aremore than 10 feet away from it.",
	"While attuned to the artifact, you have disadvantage onsaving throws against poison.",
	"While attuned to the artifact, you emit a sour stenchnoticeable from up to 10 feet away.",
	"While attuned to the artifact, all holy water within 10 feet ofyou is destroyed.",
	"While attuned to the artifact, you are physically ill andhave disadvantage on any ability check or saving throwthat uses Strength or Constitution.",
	"While attuned to the artifact, your weight increases by 1d4 × 10 pounds.",
	"While attuned to the artifact, your appearance changes asthe DM decides.",
	"While attuned to the artifact, you are deafened when youare more than 10 feet away from it.",
	"While attuned to the artifact, your weight drops by 1d4 × 5 pounds.",
	"While attuned to the artifact, you can't smell.",
	"While attuned to the artifact, nonmagical flames are extinguished within 30 feet of you.",
	"While you are attuned to the artifact, other creatures can't take short or long rests while within 300 feet of you.",
	"While attuned to the artifact, you deal 1d6 necrotic damage to any plant you touch that isn't a creature.",
	"While you are attuned to the artifact, animals within 30feet of you are hostile toward you.",
	"While attuned to the artifact, you must eat and drink sixtimes the normal amount each day.",
	"While you are attuned to the artifact, your flaw is amplified in a way determined by the DM.",
]

function choose_beneficial(dice) {
	if (dice <= 20)
		return 0;

	return Math.floor(dice / 10) - 1;
}

function choose_detrimental(dice) {
	if (dice < 21)
		return Math.floor(dice / 5);

	if (dice >= 21 && dice <= 30)
		return 4;

	else if (dice > 30 && dice < 71)
		return Math.floor(dice / 5) - 1;

	else if (dice >= 71 && dice <= 80)
		return 13;

	return Math.floor(dice / 5) - 2;
}

var first_choose = choose_beneficial(first_dice);
var second_choose = choose_detrimental(second_dice);

if (first_choose >= 4 && first_choose <= 7) {
	var level_spells = spells[CORRESPONDENCE[first_choose - 4]];
	var spell = level_spells[Math.floor((Math.random() * level_spells.length) + 1)];
}

window.onload = function () {
	document.getElementById("beneficial").innerHTML = beneficial_properties[first_choose];

	if (spell)
		document.getElementById("spell").innerHTML = "<b>Spell: </b>" + spell;
	
	document.getElementById("detrimental").innerHTML = detrimental_properties[second_choose];
}