
$(document).ready(function () {
	//This variable tells us if our game has started or not (startGame preps the game and changes it to true later)
	var gameStarted = false;

	//initial variables
	//player's chosen character's HP and initial attack power.
	var yourHP = 120;
	var yourAttack = 10;

	//defined variables for enemy's HP and attack power.
	//defenderHP & defenderAttack are common variables so that the click function on #attack can be used for each character and across different enemyies.
	//These are initially set to 0, but will be changed later throughout the course.
	var defenderHP = 0;
	var defenderAttack = 0;

	//these variables identify the HP of each enemy per character.
	var strongEnemyHP = 140;
	var strongerEnemyHP = 140;
	var strongestEnemyHP = 160;

	//Keeps track of how many enemies are left later on
	var enemyCount = 3;
	//hasDefender is used in some if-statements to see if a player already has an enemy chosen. If not, hasDefender === false.
	var hasDefender = false;
	//attackCount is used primarily to update texts of the game.
	var attackCount = 1;

	//This function starts the game, clears the #startbox from HTML.
	function startGame() {
		gameStarted = true;
		if (gameStarted === true) {
			$("#startbox").html("");
		}
	}

	//This function prepares all the enemies.
	//It takes in the enemyIDNum (where the enemy was first located) and then places it into the battlezone.
	//enemyStrength is whether or not the enemy's HP is strongEnemy, strongerEnemy, or strongestEnemy 
	//enemyName is the name of the enemy. This is used to update the texts accordingly.
	//imgName is the name of the image for the enemy. I needed to put this in a function as I have a total of 9 enemies.
	function prepEnemy(enemyIDNum, enemyStrength, enemyName, imgName) {
		if (hasDefender === false) {
			defenderHP = enemyStrength;
			hasDefender = true;
			$(enemyIDNum).html("");
			$("#defender").html("<img src='assets/images/" + imgName + ".png'><br>" + enemyName + "<br>HP: <span id='defenderHP'>" + defenderHP + "</span>");
		}
	}

	//This function is the MEAT of the game. When the user presses "attack" button,
	$("#attack").click(function () {
		//First it check is if the player has chosen an enemy to start with.
		if (hasDefender) {
			//This if statement checks to see if both the player and the enemy still has HP left. If true, allow the player's attack to strike first and update the text using attackCount.
			if (defenderHP > 0 || yourHP > 0) {
				defenderHP = defenderHP - yourAttack;
				$("#attacktext").html("<h6>You:</h6> " + attackSayings[attackCount] + " (Effectiveness: " + yourAttack + ")");
				yourAttack = yourAttack + 10;
				$("#defenderHP").html(defenderHP);
			}
			//After the attack, if defenderHP is still above 0, allow the enemy to attack the player and update the text using attackCount.
			if (defenderHP > 0) {
				yourHP = yourHP - defenderAttack;
				$("#yourHP").html(yourHP);
				$("#countertext").html("<h6>Enemy:</h6> " + insults[attackCount] + " (Effectiveness: " + defenderAttack + ")");
				attackCount++;
			}

			//If enemy's HP is less than or equal to 0 and there are still enemies left, decrease the number of enemies and update the texts.
			if (defenderHP <= 0 && enemyCount >= 1) {
				enemyCount--;
				$("#attack").html("Choose another enemy");
				$("#countertext").html("<h6>Enemy:</h6> " + "...");
				hasDefender = false;
			}

			//If player's HP is less than or equal to 0, then the player had LOST and texts is updated.
			if (yourHP <= 0) {
				$("#attack").html("...");
				hasDefender = false;
				$("#instruction").html("<p><h1>Your day sucked</h1><br>Click 'Restart' to start all over.</p>");
			}
		}
		//This "else" statement is if the user does not have an enemy charater in the battlefield anymore. This then updates the "instructions" div to inform whether player has win or lost.
		else {
			if (enemyCount <= 0 && yourHP > 0) {
				$("#instruction").html("<p><h1>Your day was okay</h1><br>Good job! Click 'Restart' to try another character.</p>");
			}
			if (enemyCount > 0 && yourHP <= 0) {
				$("#instruction").html("<p><h1>Your day sucked</h1><br>Click 'Restart' to start all over.</p>");
			}
		}
	});
	//Refreshes the page
	$("#restartbtn").click(function () {
		location.reload();
	});

	//If choice 1 (Britney on her Period) was chosen as the player's character of choice.
	$("#choice1").click(function () {
		//start the game, making gameStarted === true and removing the "Pick a Character!" box at the beginning.
		startGame();

		//Sets up the html documents with the appropriae photo of the chosen character and its enemies.
		$("#yourcharacter").html("<img src='assets/images/britney.png'><br>" + "Britney on her Period" + "<br>HP: <span id= 'yourHP'>" + yourHP + "</span>");
		$("#enemy1btn").html("<img src='assets/images/sasha.png'><br>" + "Frenemy Sasha" + "<br>HP: " + strongestEnemyHP);
		$("#enemy2btn").html("<img src='assets/images/john.png'><br>" + "Boyfriend John" + "<br>HP: " + strongEnemyHP);
		$("#enemy3btn").html("<img src='assets/images/starbucks.png'><br>" + "Cashier at Starbucks" + "<br>HP: " + strongerEnemyHP);

		//If enemy 1 was chosen as a fighing enemy.
		$("#enemy1btn").click(function () {
			//Making that the player had not yet chosen an enemy prior to picking enemy 1. Also ensures that player's HP is above 0.
			if (hasDefender === false && yourHP > 0) {
				//Update the attacking/counter attack texts
				$("#attacktext").html("");
				$("#countertext").html("");
				//arrays of strings for the texts that will be displayed during the fight
				attackSayings = ["OMG, I haven't seen you in forever! You are much prettier in person.", "At least I don't look like a slob with my hair down. Speaking of which, want to go get your hair done at the salon today?", "Then we can head to the mall to find you something cute that doesn't make you look so fat", "I hope we can find one that fits over your head", "There are probably not many bags that can fit over your's anyway.", "Isn't most of your hair extensions?"];
				insults = ["Thanks, you too! Although I think I actually like your hair better when it's down.", "Yeah, and maybe at the salon, we can also get your chin waxed. Looks like its been a while.", "I'm not going to trust your fashion sense! Your purse is sooooo 2016. We should look at purses instead.", "I think your outfit would be more complete if maybe the bag was over YOUR head.", "That's only because my hair is more voluminous and luscious than your's.", "At least I put effort into the way I look."];
				//what the enemy's strength will be.
				defenderAttack = 25;
				//Changing the button of "#Attack" to "Attack"
				$("#attack").html("Attack");
				//Preps the enemy with the prepEnemy function and places her into the fighting row.
				prepEnemy("#enemy1", strongestEnemyHP, "Frenemy Sasha", "sasha");
				//clear attackCount.
				attackCount = 0;
			}
		});

		//!!!Refer to #enemy1btn comments and #choice1 comments to see how the rest of this code runs. The rest of the code is primarily copied and pasted from #enemy1btn and #choice 1 besides minor string adjustments
		$("#enemy2btn").click(function () {
			if (hasDefender === false && yourHP > 0) {
				$("#attacktext").html("");
				$("#countertext").html("");
				defenderAttack = 10;
				$("#attack").html("Attack");
				attackSayings = ["Hi honey, did you do that one thing I asked you to do?", "That thing I asked you to do 3-4 times already????", "*stands in front of the TV*", "I WANT MORE ATTENTION", "Why do you ALWAYS have to be this way?", "*turns TV off*"];
				insults = ["What thing?", "*continues playing video games*", "OMG, lady, what do you want?", "Go spend time with Sasha or something", "Ughhhh *continues playing video games*", "MY BABY"];
				prepEnemy("#enemy2", strongEnemyHP, "Boyfriend John", "john");
				attackCount = 0;
			}
		});
		$("#enemy3btn").click(function () {
			if (hasDefender === false && yourHP > 0) {
				$("#attacktext").html("");
				$("#countertext").html("");
				defenderAttack = 20;
				$("#attack").html("Attack");
				attackSayings = ["Can I have a venti iced skinny hazelnut macchiato, sugar-free syrup, extra-extra shot, light ice, no whip? Actually, add another shot onto it as well.", "A venti iced skinny hazelnut macchiato, sugar-free syrup, three extra shots, light ice, no whip. Actually, just two extra shots is fine.", "No, no, no. Sugar-free syrup, extra-extra shot, and NO whip", "Uuhhhhhhhhhh, ummmmmmmm, hmmm. Do you guys have any non-caffeinated, sugar-free, fat-free frappuccinos?", "Oh, okay, NVM lol", "How much longer will it take? I have to go somewhere. Let me talk to your manager."];
				insults = ["What was that again?", "A venti iced skinny hazelnut macchiato, extra shot, with whip. Got it. ", "Ok. Anything else?", "No.", "*rolls eyes*", "$11.60. Here is your grande iced skinny hazelnut macchiato with whip."];
				prepEnemy("#enemy3", strongerEnemyHP, "Cashier at Starbucks", "starbucks");
				attackCount = 0;
			}
		});
	});


	$("#choice2").click(function () {
		startGame();
		$("#yourcharacter").html("<img src='assets/images/john.png'><br>" + "Regular John" + "<br>HP: <span id= 'yourHP'>" + yourHP + "</span>")
		$("#enemy1btn").html("<img src='assets/images/traffic.png'><br>" + "Traffic at 5pm" + "<br>HP: " + strongEnemyHP);
		$("#enemy2btn").html("<img src='assets/images/britney.png'><br>" + "Girlfriend on Period Britney" + "<br>HP: " + strongestEnemyHP);
		$("#enemy3btn").html("<img src='assets/images/mike.png'><br>" + "Manager Mike" + "<br>HP: " + strongerEnemyHP);
		$("#enemy1btn").click(function () {
			if (hasDefender === false && yourHP > 0) {
				$("#attacktext").html("");
				$("#countertext").html("");
				defenderAttack = 10;
				$("#attack").html("Attack");
				attackSayings = ["beep beep", "beep", "beep beep beep", "BEEP BEEP BEEP BEEP", "beep beep", "beeeeeeeeeeeeeeeeep"];
				insults = ["beep", "beep beep", "beep beep beep", "beeeeeeeeeeeeeeeeeeeeeeeeeeep", "beep beep", "beep"];
				prepEnemy("#enemy1", strongEnemyHP, "Traffic at 5pm", "traffic");
				attackCount = 0;
			}
		});
		$("#enemy2btn").click(function () {
			if (hasDefender === false && yourHP > 0) {
				$("#attacktext").html("");
				$("#countertext").html("");
				defenderAttack = 25;
				$("#attack").html("Attack");
				attackSayings = ["Hey honey, what's for dinner tonight?", "All I did was ask what's for dinner, gosh.", "Well then what are we going to eat?", "But we don't have that kind of money.", "Fine fine. Let's go to McDonald's. Don't order too much though.", "But we don't have money for that, I need to save money for the next Call of Duty game!"];
				insults = ["Why am I the only one who does anything around here?", "I don't always have to cook dinner, you know.", "IDK? MAYBE TAKE ME OUT TO DINNER SOMETIME?", "But we haven't gone out for months! It's like you don't even care.", "But I want to go to Olive Garden.", "WE'RE GOING TO OLIVE GARDEN."];
				prepEnemy("#enemy2", strongestEnemyHP, "Girlfriend on Period Britney", "britney");
				attackCount = 0;
			}
		});
		$("#enemy3btn").click(function () {
			if (hasDefender === false && yourHP > 0) {
				$("#attacktext").html("");
				$("#countertext").html("");
				defenderAttack = 20;
				$("#attack").html("Attack");
				attackSayings = ["Hey boss, I sent you an email on Monday, did you happen see it?", "I was wondering if there was a chance I could get the holidays off this year.", "But I sent you the email on Monday.", "But I already bought plane tickets to go to Canada.", "Is there a chance you can make an exception? And if I have to work, is there holiday pay involved?", "Do you think you can get back to me as soon as you can? I also need to start submitting job applications to other places"];
				insults = ["Uhh... yeah, I remember seeing it, I just didn't have time to respond.", "Unfortunately, no. There isn't enough time to find coverage now. Maybe if you had let me known earlier this week, that may have been possible.", "Umm, well I can certainly look into it for you, but I cannot guarantee that you get it off.", "Hmmm... that's too bad.", "I can definitely look into it for you.", "Sure, sure, no worries. I will get back to you as soon as I can. (never)"];
				prepEnemy("#enemy3", strongerEnemyHP, "Manager Mike", "mike");
				attackCount = 0;
			}
		});
	});

	$("#choice3").click(function () {
		startGame();
		$("#yourcharacter").html("<img src='assets/images/mom.png'><br>" + "Menopausal Mom" + "<br>HP: <span id= 'yourHP'>" + yourHP + "</span>");
		$("#enemy1btn").html("<img src='assets/images/safeway.png'><br>" + "Cashier at Safeway" + "<br>HP: " + strongestEnemyHP);
		$("#enemy2btn").html("<img src='assets/images/henry.png'><br>" + "Husband Henry" + "<br>HP: " + strongerEnemyHP);
		$("#enemy3btn").html("<img src='assets/images/john.png'><br>" + "Adult Son John" + "<br>HP: " + strongEnemyHP);
		$("#enemy1btn").click(function () {
			if (hasDefender === false && yourHP > 0) {
				$("#attacktext").html("");
				$("#countertext").html("");
				defenderAttack = 25;
				$("#attack").html("Attack");
				attackSayings = ["Excuse me ma'am, I was wondering where your canned anchovies are? This place is so unorganized!", "But I was planning to use it in my anchovy soup recipe today!", "Holy moly guacamole. Are you serious? I don't have that kind of time! Do you know how long that would take?", "Well can you ask someone?", "But that would be too late to make my anchovy soup!", "This is unbelievable. I even have a coupon for 15 cents off my anchovies. Can I talk to your manager?"];
				insults = ["Sorry, we had just ran out of that.", "Sorry ma'am. Unfortunately, there is nothing I can do until we get the next shipment.", "Sorry ma'am, no I do not.", "There's no one here that can answer that question. Our stock guys come in after hours.", "I recommend you go elsewhere for your anchovies, ma'am.", "He's actually not in today."];
				prepEnemy("#enemy1", strongestEnemyHP, "Cashier at Safeway", "safeway");
				attackCount = 0;
			}
		});
		$("#enemy2btn").click(function () {
			if (hasDefender === false && yourHP > 0) {
				$("#attacktext").html("");
				$("#countertext").html("");
				defenderAttack = 20;
				$("#attack").html("Attack");
				attackSayings = ["Honey, does this dress make me look fat?", "What do you mean its not the dress? Of course its the dress.", "Don't use that tone on me.", "EXCUSE ME?", "Better be. Now come help me zip up the zipper for this dress", "OF COURSE IT WILL, YOU OLD FART."];
				insults = ["It's not the dress.", "Sure, whatever", "You're starting to sound a lot like your mother", "Nothing.", "Oh my god, it's not even zipped up? Will it be able to?", "It's not doing it. I think you're too fat."];
				prepEnemy("#enemy2", strongerEnemyHP, "Husband Henry", "henry");
				attackCount = 0;
			}
		});
		$("#enemy3btn").click(function () {
			if (hasDefender === false && yourHP > 0) {
				$("#attacktext").html("");
				$("#countertext").html("");
				defenderAttack = 10;
				$("#attack").html("Attack");
				attackSayings = ["Hi Son. So glad to be talking to you today. I've missed you very much. I wish you would call more often... or pick up the phone more often.", "Whenever you don't pick up your phone I get worried sick. You need to promise me you'll do it more often. Okay?", "Now how's your eating? Are you eating?", "No need for the attitude, young man. I am just worried. I have the right to be worried. You are my baby.", "YOUNG MAN, YOU NEED TO APPRECIATE ME MORE OFTEN. YOU WILL ALWAYS BE MY LITTLE BABY, YOU UNDERSTAND?", "That's right. Now make sure you eat later on. It's almost dinner time. I have to go now - your father is being incompetent again. I will call you tomorrow and I expect you to answer right away. RIGHT AWAY. No excuses. Okay? Okay. Bye."];
				insults = ["whatsup mom.", "ok", "ughhh... all the time, mom.", "UGHGHHH mom, I am 26.", "ok fine sorry", "bye."];
				prepEnemy("#enemy3", strongEnemyHP, "Adult Son John", "john");
				attackCount = 0;
			}
		});
	});
	$("#choice4").click(function () {
		startGame();
		$("#yourcharacter").html("<img src='assets/images/phil.png'><br>" + "Farmer Phil" + "<br>HP: <span id= 'yourHP'>" + yourHP + "</span>");
		$("#enemy1btn").html("<img src='assets/images/cow.png'><br>" + "Cow" + "<br>HP: " + strongerEnemyHP);
		$("#enemy2btn").html("<img src='assets/images/nick.png'><br>" + "Neighbor Nick" + "<br>HP: " + strongEnemyHP);
		$("#enemy3btn").html("<img src='assets/images/alien.png'><br>" + "Alien" + "<br>HP: " + strongestEnemyHP);
		$("#enemy1btn").click(function () {
			if (hasDefender === false && yourHP > 0) {
				$("#attacktext").html("");
				$("#countertext").html("");
				defenderAttack = 20;
				$("#attack").html("Attack");
				attackSayings = ["Why did the cow cross the road?", "How did the cow get to Mars?", "What was the name of the cow knight?", "Why do cows have hooves instead of feet?", "What did the mommy cow say to the baby cow?", "What are grumpy cows called?"];
				insults = ["To get to the udder side.", "It flew through udder space.", "Sir Loin", "Because they lactose", "It's pasture bedtime!", "Moo-dy"];
				prepEnemy("#enemy1", strongerEnemyHP, "Cow", "cow");
				attackCount = 0;
			}
		});
		$("#enemy2btn").click(function () {
			if (hasDefender === false && yourHP > 0) {
				$("#attacktext").html("");
				$("#countertext").html("");
				defenderAttack = 10;
				$("#attack").html("Attack");
				attackSayings = ["WHO IS THAT? GET OFF MY PROPERTY", "I SAID GET OFF MY PROPERTY", "I just have salt.", "No.", "Ask someone else", "No"];
				insults = ["It's your favorite neeeeiiiigghhborr!! Neighbor Nick!", "I'm just here trying to borrow a cup of sugarrrrr. You got any?", "OooooOOOOOOOOoh. I need some of that too, may I have some please?", "I am just trying to bake cookies for all my neighbors. I just need a pinch.", "Don't you want a cookie?", "Awww shucks, don't be shy, I'll make you some anyways. I'll be back real soon!"];
				prepEnemy("#enemy2", strongEnemyHP, "Neighbor Nick", "nick");
				attackCount = 0;
			}
		});
		$("#enemy3btn").click(function () {
			if (hasDefender === false && yourHP > 0) {
				$("#attacktext").html("");
				$("#countertext").html("");
				defenderAttack = 25;
				$("#attack").html("Attack");
				attackSayings = ["AHHHHH", "pewpewpew BOOMBOOM", "BOOOMBOOMBOOOM", "powpowpowpow", "poppopop", "BOOOOOOOOOOM"];
				insults = ["zoopzoop", "zzzzzz pew BOOM", "zzaaaaaa gggg zzz pew", "zoopzoopzoop pew pow", "zzzzzzzzzzz", "BOOOOOOOOOOOOM"];
				prepEnemy("#enemy3", strongestEnemyHP, "Alien", "alien");
				attackCount = 0;
			}
		});
	});
});
