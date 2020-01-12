var spells = {'cantrips': ['Acid Splash', 'Blade Ward', 'Chill Touch', 'Dancing Lights', 'Druidcraft', 'Eldritch Blast', 'Fire Bolt', 'Friends', 'Guidance', 'Light', 'Mage Hand', 'Mending', 'Message', 'Minor Illusion', 'Poison Spray', 'Prestidigitation', 'Produce Flame', 'Ray of Frost', 'Resistance', 'Sacred Flame', 'Shillelagh', 'Shocking Grasp', 'Spare the Dying', 'Thaumaturgy', 'Thorn Whip', 'True Strike', 'Vicious Mockery'],
			  'first-level': ['Alarm', 'Animal Friendship', 'Armor of Agathys', 'Arms of Hadar', 'Bane', 'Bless', 'Burning Hands', 'Charm Person', 'Chromatic Orb', 'Color Spray', 'Command', 'Compelled Duel', 'Comprehend Languages', 'Create or Destroy Water', 'Cure Wounds', 'Detect Evil and Good', 'Detect Magic', 'Detect Poison and Disease', 'Disguise Self', 'Dissonant Whispers', 'Divine Favor', 'Ensnaring Strike', 'Entangle', 'Expeditious Retreat', 'Faerie Fire', 'False Life', 'Feather Fall', 'Find Familiar', 'Fog Cloud', 'Goodberry', 'Grease', 'Guiding Bolt', 'Hail of Thorns', 'Healing Word', 'Hellish Rebuke', 'Heroism', 'Hex', "Hunter's Mark", 'Identify', 'Illusory Script', 'Inflict Wounds', 'Jump', 'Longstrider', 'Mage Armor', 'Magic Missile', 'Protection from Evil and Good', 'Purify Food and Drink', 'Ray of Sickness', 'Sanctuary', 'Searing Smite', 'Shield', 'Shield of Faith', 'Silent Image', 'Sleep', 'Speak with Animals', "Tasha's Hideous Laughter", "Tenser's Floating Disk", 'Thunderous Smite', 'Thunderwave', 'Unseen Servant', 'Witch Bolt', 'Wrathful Smite'], 
			  'second-level': ['Aid', 'Alter Self', 'Animal Messenger', 'Arcane Lock', 'Augury', 'Barkskin', 'Beast Sense', 'Blindness/Deafness', 'Blur', 'Branding Smite', 'Calm Emotions', 'Cloud of Daggers', 'Continual Flame', 'Cordon of Arrows', 'Crown of Madness', 'Darkness', 'Darkvision', 'Detect Thoughts', 'Enhance Ability', 'Enlarge/Reduce', 'Enthrall', 'Find Steed', 'Find Traps', 'Flame Blade', 'Flaming Sphere', 'Gentle Repose', 'Gust of Wind', 'Heat Metal', 'Hold Person', 'Invisibility', 'Knock', 'Lesser Restoration', 'Levitate', 'Locate Animals or Plants', 'Locate Object', 'Magic Mouth', 'Magic Weapon', "Melf's Acid Arrow", 'Mirror Image', 'Misty Step', 'Moonbeam', "Nystul's Magic Aura", 'Pass Without Trace', 'Phantasmal Force', 'Prayer of Healing', 'Protection from Poison', 'Ray of Enfeeblement', 'Rope Trick', 'Scorching Ray', 'See Invisibility', 'Shatter', 'Silence', 'Spider Climb', 'Spike Growth', 'Spiritual Weapon', 'Suggestion', 'Warding Bond', 'Web', 'Zone of Truth'],
			  'third-level': ['Animate Dead', 'Aura of Vitality', 'Beacon of Hope', 'Bestow Curse', 'Blinding Smite', 'Blink', 'Call Lightning', 'Clairvoyance', 'Conjure Animals', 'Conjure Barrage', 'Counterspell', 'Create Food and Water', "Crusader's Mantle", 'Daylight', 'Dispel Magic', 'Elemental Weapon', 'Fear', 'Feign Death', 'Fireball', 'Fly', 'Gaseous Form', 'Glyph of Warding', 'Haste', 'Hunger of Hadar', 'Hypnotic Pattern', "Leomund's Tiny Hut", 'Lightning Arrow', 'Lightning Bolt', 'Magic Circle', 'Major Image', 'Mass Healing Word', 'Meld into Stone', 'Nondetection', 'Phantom Steed', 'Plant Growth', 'Protection from Energy', 'Remove Curse', 'Revivify', 'Sending', 'Sleet Storm', 'Slow', 'Speak with Dead', 'Speak with Plants', 'Spirit Guardians', 'Stinking Cloud', 'Tongues', 'Vampiric Touch', 'Water Breathing', 'Water Walk', 'Wind Wall'], 
			  'fourth-level': ['Arcane Eye', 'Aura of Life', 'Aura of Purity', 'Banishment', 'Blight', 'Compulsion', 'Confusion', 'Conjure Minor Elementals', 'Conjure Woodland Beings', 'Control Water', 'Death Ward', 'Dimension Door', 'Divination', 'Dominate Beast', "Evard's Black Tentacles", 'Fabricate', 'Fire Shield', 'Freedom of Movement', 'Giant Insect', 'Grasping Vine', 'Greater Invisibility', 'Guardian of Faith', 'Hallucinatory Terrain', 'Ice Storm', "Leomund's Secret Chest", 'Locate Creature', "Mordenkainen's Faithful Hound", "Mordenkainen's Private Sanctum", "Otiluke's Resilient Sphere", 'Phantasmal Killer', 'Polymorph', 'Staggering Smite', 'Stone Shape', 'Stoneskin', 'Wall of Fire'], 
			  'fifth-level': ['Animate Objects', 'Antilife Shell', 'Awaken', 'Banishing Smite', "Bigby's Hand", 'Circle of Power', 'Cloudkill', 'Commune', 'Commune with Nature', 'Cone of Cold', 'Conjure Elemental', 'Conjure Volley', 'Contact Other Plane', 'Contagion', 'Creation', 'Destructive Wave', 'Dispel Evil and Good', 'Dominate Person', 'Dream', 'Flame Strike', 'Geas', 'Greater Restoration', 'Hallow', 'Hold Monster', 'Insect Plague', 'Legend Lore', 'Mass Cure Wounds', 'Mislead', 'Modify Memory', 'Passwall', 'Planar Binding', 'Raise Dead', "Rary's Telepathic Bond", 'Reincarnate', 'Scrying', 'Seeming', 'Swift Quiver', 'Telekinesis', 'Teleportation Circle', 'Tree Stride', 'Wall of Force', 'Wall of Stone'], 
			  'sixth-level': ['Arcane Gate', 'Blade Barrier', 'Chain Lightning', 'Circle of Death', 'Conjure Fey', 'Contingency', 'Create Undead', 'Disintegrate', "Drawmij's Instant Summon", 'Eyebite', 'Find the Path', 'Flesh to Stone', 'Forbiddance', 'Globe of Invulnerability', 'Guards and Wards', 'Harm', 'Heal', "Heroes' Feast", 'Magic Jar', 'Mass Suggestion', 'Move Earth', "Otiluke's Freezing Sphere", "Otto's Irresistible Dance", 'Planar Ally', 'Programmed Illusion', 'Sunbeam', 'Transport via Plants', 'True Seeing', 'Wall of Ice', 'Wall of Thorns', 'Wind Walk', 'Word of Recall'], 
			  'seventh-level': ['Conjure Celestial', 'Delayed Blast Fireball', 'Divine Word', 'Etherealness', 'Finger of Death', 'Fire Storm', 'Forcecage', 'Mirage Arcane', "Mordenkainen's Magnificent Mansion", "Mordenkainen's Sword", 'Plane Shift', 'Prismatic Spray', 'Project Image', 'Regenerate', 'Resurrection', 'Reverse Gravity', 'Sequester', 'Simulacrum', 'Symbol', 'Teleport'], 
			  'eigth-level': ['Animal Shapes', 'Antimagic Field', 'Antipathy/Sympathy', 'Clone', 'Control Weather', 'Demiplane', 'Dominate Monster', 'Earthquake', 'Feeblemind', 'Glibness', 'Holy Aura', 'Incendiary Cloud', 'Maze', 'Mind Blank', 'Power Word Stun', 'Sunburst', 'Telepathy', 'Tsunami'], 
			  'ninth-level': ['Astral Projection', 'Foresight', 'Gate', 'Imprisonment', 'Mass Heal', 'Meteor Swarm', 'Power Word Heal', 'Power Word Kill', 'Prismatic Wall', 'Shapechange', 'Storm of Vengeance', 'Time Stop', 'True Polymorph', 'True Resurrection', 'Weird', 'Wish']}


var correspondece = {0: "cantrips",
	                 1: "first-level",
	                 2: "second-level",
	                 3: "third-level",
	                 4: "fourth-level",
	                 5: "fifth-level",
	                 6: "sixth-level",
	                 7: "seventh-level",
	                 8: "eigth-level",
	                 9: "ninth-level"}

//Dice

var first_dice = Math.floor((Math.random() * 100) + 1); //Returns a random number between 1 and 100
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
	                    "While attuned to the artifact, you can't be blinded, deafened, petrified, or stunned."]

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

var first_choose = choose(first_dice);
var second_choose = choose(second_dice);

if (first_choose >= 4 && first_choose <= 7) {
	var level_spells = spells[correspondece[first_choose - 4]];
	var first_spell = level_spells[Math.floor((Math.random() * level_spells.length) + 1)];
}

if (second_choose >= 4 && second_choose <= 7) {
	var level_spells = spells[correspondece[second_choose]];
	var second_spell = level_spells[Math.floor((Math.random() * level_spells.length) + 1)];
}

window.onload = function() {
	document.getElementById("minor").innerHTML = minor_properties[first_choose];
	document.getElementById("first_spell").innerHTML = first_spell;
	document.getElementById("major").innerHTML = major_properties[second_choose];
	document.getElementById("second_spell").innerHTML = second_spell;
}