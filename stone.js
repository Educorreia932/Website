var first_dice = Math.floor((Math.random() * 100) + 1); //Returns a random number between 1 and 10
var second_dice = Math.floor((Math.random() * 100) + 1);

var minor_properties = ["While attuned to the artifact, you gain proficiency in one skill of the DM's choice.",
	                    "While attuned to the artifact, you are immune to disease.",
	                    "While attuned to the artifact, you can't be charmed or frightened.",
	                    "While attuned to the artifact, you have resistance against one damage type of the DM's choice.",
	                    "While attuned to the artifact, you can use an action to cast one cantrip (chosen by the DM) from it.",
	                    "While attuned to the artifact, you can use an action to cast one 1st-level spell (chosen by the DM) from it. After you cast the spell, roll a d6. On a roll of 1-5, you can't cast it again until the next dawn.",
	                    "As 61 - 70 above, except the spell is 2nd level.",
	                    "As 61 - 70 above, except the spell is 3rd level.",
	                    "While attuned to the artifact, you gain a +1 bonus to Armor Class." ]

var major_properties = ["While attuned to the artifact, one of your ability scores (DM's choice) increases by 2, to a maximum of 24.",
	                    "While attuned to the artifact, you regain 1d6 hit points at the start of your turn if you have at least 1 hit point.",
	                    "When you hit with a weapon attack while attuned to the artifact, the target takes an extra 1d6 damage of the weapon's type.",
	                    "While attuned to the artifact, your walking speed increases by 10 feet.",
	                    "While attuned to the artifact, you can use an action to cast one 4th-level spell (chosen by the DM) from it. After you cast the spell, roll a d6 . On a roll of 1 - 5, you can't cast it again until the next dawn.",
	                    "As 51 - 60 above, except the spell is 5th level.",
	                    "As 51 - 60 above, except the spell is 6th level.",
	                    "As 51 - 60 above, except the spell is 7th level.",
	                    "While attuned to the artifact, you can't be blinded, deafened, petrified , or stunned."]

function choose(dice) {
	if (dice >= 1 && dice <= 20) {
        return 0
	}
    
    else if (dice >= 21 && dice <= 30) {
        return 1
    }
    
    else if (dice >= 31 && dice <= 40) {
        return 2
    }
    
    else if (dice >= 41 && dice <= 50) {
        return 3
    }
    
    else if (dice >= 51 && dice <= 60) {
        return 4
    }
    
    else if (dice >= 61 && dice <= 70) {
        return 5
    }
    
    else if (dice >= 71 && dice <= 80) {
        return 6;
    }
    
    else if (dice >= 81 && dice <= 90) {
        return 7;
    }
    
    else {
        return 8;
    }
}

document.write("<h2>Minor Beneficial Property</h2>");
document.write("<ul><li>" + minor_properties[choose(first_dice)] + "</ul>");
document.write("<h2>Major Beneficial Property</h2>");
document.write("<ul><li>" + major_properties[choose(second_dice)] + "</ul>");