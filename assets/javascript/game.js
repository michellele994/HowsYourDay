$(document).ready(function(){
var gameStarted = false;

var yourHP = 120;
var yourAttack = 10;
var defenderHP = 0;
var defenderAttack = 0;
var strongEnemyHP = 100;
var strongerEnemyHP = 140;
var strongestEnemyHP = 160;
var enemyCount = 3;
var hasDefender = false;
var attackCount = 1;


$("#choice1").click(function() {
	startGame();
	$("#yourcharacter").html("<img src='assets/images/britney.png'><br>"+"Britney on her Period"+"<br>HP: <span id= 'yourHP'>"+yourHP+"</span>");
	$("#enemy1btn").html("<img src='assets/images/sasha.png'><br>"+"Frenemy Sasha"+"<br>HP: "+strongestEnemyHP);
	$("#enemy2btn").html("<img src='assets/images/john.png'><br>"+"Boyfriend John"+"<br>HP: "+strongEnemyHP);
	$("#enemy3btn").html("<img src='assets/images/starbucks.png'><br>"+"Cashier at Starbucks"+"<br>HP: "+strongerEnemyHP);
	$("#enemy1btn").click(function() {
		if (hasDefender === false && yourHP > 0)
		{
			attackSayings = ["OMG, I haven't seen you in forever! You are much prettier in person.", "At least I don't look like a slob with my hair down. Speaking of which, want to go get your hair done at the salon today?", "Then we can head to the mall to find you something cute that doesn't make you look so fat", "I hope we can find one that fits your head", "There are probably not many bags that can fit over your's anyways.", "Isn't most of your hair extensions anyway?"];
			insults = ["Thanks, you too! Although I think I actually like your hair better when it's down.", "Yeah, and maybe at the salon, we can also get your chin waxed. Looks like its been a while.", "I'm not going to trust your fashion sense! Your purse is sooooo 2016. We should look at purses instead.", "I think your outfit would be more complete if maybe the bag was over YOUR head.", "That's only because my hair is more voluminous and luscious than your's.", "At least I put effort into the way I look."];
			defenderAttack = 25;
			$("#attack").html("Attack");
			prepEnemy("#enemy1", strongestEnemyHP, "Frenemy Sasha", "sasha");
			attackCount = 0;
		}
	});
	$("#enemy2btn").click(function() {
		if (hasDefender === false && yourHP > 0)
		{
			defenderAttack = 10;
			$("#attack").html("Attack");
			attackSayings = ["Hi honey, did you do that one thing I asked you to do?", "That thing I asked you to do 3-4 times already????", "*stands in front of the TV*", "I WANT MORE ATTENTION", "Why do you ALWAYS have to be this way?", "*turns TV off*"];
			insults = ["What thing?", "*continues playing video games*", "OMG, lady, what do you want?", "Go spend time with Sasha or something", "Ughhhh *continues playing video games*", "MY BABY"];
			prepEnemy("#enemy2", strongEnemyHP, "Boyfriend John", "john");
			attackCount = 0;
		}
	});
	$("#enemy3btn").click(function() {
		if (hasDefender === false && yourHP > 0)
		{
			defenderAttack = 20;
			$("#attack").html("Attack");
			attackSayings = ["Can I have a venti iced skinny hazelnut macchiato, sugar-free syrup, extra-extra shot, light ice, no whip? Actually, add another shot onto it as well.", "A venti iced skinny hazelnut macchiato, sugar-free syrup, three extra shots, light ice, no whip. Actually, just two extra shots is fine.", "No, no, no. Sugar-free syrup, extra-extra shot, and NO whip", "Uuhhhhhhhhhh, ummmmmmmm, hmmm. Do you guys have any non-caffeinated, sugar-free, fat-free frappuccinos?", "Oh, okay, NVM lol", "How much longer will it take? I have to go somewhere. Let me talk to your manager."];
			insults = ["What was that again?", "A venti iced skinny hazelnut macchiato, extra shot, with whip. Got it. ", "Ok. Anything else?", "No.", "*rolls eyes*", "$11.60. Here is your grande iced skinny hazelnut macchiato with whip."];
			prepEnemy("#enemy3", strongerEnemyHP, "Cashier at Starbucks", "starbucks");
			attackCount = 0;
		}
	});
});


$( "#choice2" ).click(function() {
	startGame();
	$("#yourcharacter").html("<img src='assets/images/john.png'><br>"+"Regular John"+"<br>HP: <span id= 'yourHP'>"+yourHP+"</span>")
	$("#enemy1btn").html("<img src='assets/images/traffic.png'><br>"+"Traffic at 5pm"+"<br>HP: "+strongEnemyHP);
	$("#enemy2btn").html("<img src='assets/images/britney.png'><br>"+"Girlfriend on Period Britney"+"<br>HP: "+strongestEnemyHP);
	$("#enemy3btn").html("<img src='assets/images/mike.png'><br>"+"Manager Mike"+"<br>HP: "+strongerEnemyHP);
	$("#enemy1btn").click(function() {
		if (hasDefender === false && yourHP > 0)
		{
			defenderAttack = 10;
			$("#attack").html("Attack");
			attackSayings = ["beep beep", "beep", "beep beep beep", "BEEP BEEP BEEP BEEP", "beep beep", "beeeeeeeeeeeeeeeeep"];
			insults = ["beep", "beep beep", "beep beep beep", "beeeeeeeeeeeeeeeeeeeeeeeeeeep", "beep beep", "beep"];
			prepEnemy("#enemy1", strongEnemyHP, "Traffic at 5pm", "traffic");
			attackCount = 0;
		}
	});
	$("#enemy2btn").click(function() {
		if (hasDefender === false && yourHP > 0)
		{
			defenderAttack = 25;
			$("#attack").html("Attack");
			attackSayings = ["Hey honey, what's for dinner tonight?", "All I did was ask what's for dinner, gosh.", "Well then what are we going to eat?", "But we don't have that kind of money.", "Fine fine. Let's go to McDonald's. Don't order too much though.", "But we don't have money for that, I need to save money for the next Call of Duty."];
			insults = ["Why am I the only one who does anything around here?", "I don't always have to cook dinner, you know.", "IDK? MAYBE TAKE ME OUT TO DINNER SOMETIME?", "But we haven't gone out for months! It's like you don't even care.", "But I want to go to Olive Garden.", "WE'RE GOING TO OLIVE GARDEN."];
			prepEnemy("#enemy2", strongestEnemyHP, "Girlfriend on Period Britney", "britney");
			attackCount = 0;
		}
	});
	$("#enemy3btn").click(function() {
		if (hasDefender === false && yourHP > 0)
		{
			defenderAttack = 20;
			$("#attack").html("Attack");
			attackSayings = ["Hey boss, I sent you an email on Monday, did you happen see them?", "I was wondering if there was a chance I could get the holidays off this year.", "But I sent you the first email on Monday.", "But I already bought plane tickets to go to Canada.", "Is there a chance you can make an exception? And if I have to work, is there holiday pay involved?", "Do you think you can get back to me as soon as you can? I also need to start submitting job applications to other places"];
			insults = ["Uhh... yeah, I remember seeing it, I just didn't have time to respond.", "Unfortunately, no. There isn't enough time to find coverage now. Maybe if you had let me known earlier this week, that may have been possible.", "Umm, well I can certainly look into it for you, but I cannot guarantee that you get it off.", "Hmmm... that's too bad.", "I can definitely look into it for you.", "Sure, sure, no worries. I will get back to you as soon as I can. (never)"];
			prepEnemy("#enemy3", strongerEnemyHP, "Manager Mike", "mike");
			attackCount = 0;
		}
	});
});

$( "#choice3" ).click(function() {
	startGame();
	$("#yourcharacter").html("<img src='assets/images/mom.png'><br>"+"Menopausal Mom"+"<br>HP: <span id= 'yourHP'>"+yourHP+"</span>");
	$("#enemy1btn").html("<img src='assets/images/safeway.png'><br>"+"Cashier at Safeway"+"<br>HP: "+strongestEnemyHP);
	$("#enemy2btn").html("<img src='assets/images/henry.png'><br>"+"Husband Henry"+"<br>HP: "+strongerEnemyHP);
	$("#enemy3btn").html("<img src='assets/images/john.png'><br>"+"Adult Son John"+"<br>HP: "+strongEnemyHP);
	$("#enemy1btn").click(function() {
		if (hasDefender === false && yourHP > 0)
		{
			defenderAttack = 25;
			$("#attack").html("Attack");
			attackSayings = ["Excuse me ma'am, I was wondering where your canned anchovies are? This place is so unorganized!", "But I was planning to use it in my anchovy soup recipe today!", "Holy moly guacamole. Are you serious? I don't have that kind of time! Do you know how long that would take?", "Well can you ask someone?", "But that would be too late to make my anchovy soup!", "This is unbelievable. I even have a coupon for 15 cents off my anchovies. Can I talk to your manager?"];
			insults = ["Sorry, that had just ran out of stock.", "Sorry ma'am. Unfortunately, there is nothing I can do until the next order ships over.", "Sorry ma'am, no I do not.", "There's no one here that can answer that question. Our stock guys come in after hours.", "I recommend you go elsewhere for your anchovies, ma'am.", "He's actually not in today."];
			prepEnemy("#enemy1", strongestEnemyHP, "Cashier at Safeway", "safeway");
			attackCount = 0;
		}
	});
	$("#enemy2btn").click(function() {
		if (hasDefender === false && yourHP > 0)
		{
			defenderAttack = 20;
			$("#attack").html("Attack");
			attackSayings = ["Honey, does this dress make me look fat?", "What do you mean its not the dress? Of course its the dress.","Don't use that tone on me.", "EXCUSE ME?", "Better be. Now come help me zip up the zipper for this dress", "OF COURSE IT WILL, YOU OLD FART."];
			insults = ["It's not the dress.", "Sure, whatever", "You're starting to sound a lot like your mother", "Nothing.", "Oh my god, it's not even zipped up? Will it be able to?", "It's not doing it. I think you're too fat."];
			prepEnemy("#enemy2", strongerEnemyHP, "Husband Henry", "henry");
			attackCount = 0;
		}
	});
	$("#enemy3btn").click(function() {
		if (hasDefender === false && yourHP > 0)
		{
			defenderAttack = 10;
			$("#attack").html("Attack");
			attackSayings = ["Hi Son. So glad to be talking to you today. I've missed you very much. I wish you would call more often... or pick up the phone more often.", "Whenever you don't pick up your phone I get worried sick. You need to promise me you'll do it more often. Okay?", "Now how's your eating? Are you eating?", "No need for the attitude, young man. I am just worried. I have the right to be worried. You are my baby.", "YOUNG MAN, YOU NEED TO APPRECIATE ME MORE OFTEN. YOU WILL ALWAYS BE MY LITTLE BABY, YOU UNDERSTAND?", "That's right. Now make sure you eat later on. It's almost dinner time. I have to go now - your father is being incompetent again. I will call you tomorrow and I expect you to answer right away. RIGHT AWAY. No excuses. Okay? Okay. Bye."];
			insults = ["whatsup mom.", "ok", "ughhh... all the time, mom.", "UGHGHHH mom, I am 26.", "ok fine sorry", "bye."];
			prepEnemy("#enemy3", strongEnemyHP, "Adult Son John", "john");
			attackCount = 0;
		}
	});
});
$( "#choice4" ).click(function() {
	startGame();
	$("#yourcharacter").html("<img src='assets/images/phil.png'><br>"+"Farmer Phil"+"<br>HP: <span id= 'yourHP'>"+yourHP+"</span>");
	$("#enemy1btn").html("<img src='assets/images/cow.png'><br>"+"Cow"+"<br>HP: "+strongerEnemyHP);
	$("#enemy2btn").html("<img src='assets/images/nick.png'><br>"+"Neighbor Nick"+"<br>HP: "+strongEnemyHP);
	$("#enemy3btn").html("<img src='assets/images/alien.png'><br>"+"Alien"+"<br>HP: "+strongestEnemyHP);
	$("#enemy1btn").click(function() {
		if (hasDefender === false && yourHP > 0)
		{
			defenderAttack = 20;
			$("#attack").html("Attack");
			attackSayings = ["Why did the cow cross the road?", "How did the cow get to Mars?", "What was the name of the cow knight?", "Why do cows have hooves instead of feet?", "What did the mommy cow say to the baby cow?", "What are grumpy cows called?"];
			insults = ["To get to the udder side.", "It flew through udder space.", "Sir Loin", "Because they lactose", "It's pasture bedtime!", "Moo-dy"];
			prepEnemy("#enemy1", strongerEnemyHP, "Cow", "cow");
			attackCount = 0;
		}
	});
	$("#enemy2btn").click(function() {
		if (hasDefender === false && yourHP > 0)
		{
			defenderAttack = 10;
			$("#attack").html("Attack");
			attackSayings = ["WHO IS THAT? GET OFF MY PROPERTY", "I SAID GET OFF MY PROPERTY", "I just have salt.", "No.", "Ask someone else", "No"];
			insults = ["It's your favorite neeeeiiiigghhborr!! Neighbor Nick!", "I'm just here trying to borrow a cup of sugarrrrr. You got any?", "OooooOOOOOOOOoh. I need some of that too, may I have some please?", "I am just trying to bake cookies for all my neighbors. I just need a pinch.", "Don't you want a cookie?", "Awww shucks, don't be shy, I'll make you some anyways. I'll be back real soon!"];
			prepEnemy("#enemy2", strongEnemyHP, "Neighbor Nick", "nick");
			attackCount = 0;
		}
	});
	$("#enemy3btn").click(function() {
		if (hasDefender === false && yourHP > 0)
		{
			defenderAttack = 25;
			$("#attack").html("Attack");
			attackSayings = ["AHHHHH", "pewpewpew BOOMBOOM", "BOOOMBOOMBOOOM", "powpowpowpow", "poppopop", "BOOOOOOOOOOM"];
			insults = ["zoopzoop", "zzzzzz pew BOOM", "zzaaaaaa gggg zzz pew", "zoopzoopzoop pew pow", "zzzzzzzzzzz", "BOOOOOOOOOOOOM"];
			prepEnemy("#enemy3", strongestEnemyHP, "Alien", "alien");
			attackCount = 0;
		}
	});
});


function startGame(){
	gameStarted = true;
	if (gameStarted === true)
	{
		$("#startbox").html("");
	}
}

function prepEnemy(enemyIDNum, enemyStrength, enemyName,imgName){
	if (hasDefender === false)
		{
			defenderHP = enemyStrength;
			hasDefender = true;
			$(enemyIDNum).html("");
			$("#defender").html("<img src='assets/images/"+ imgName +".png'><br>"+enemyName+"<br>HP: <span id='defenderHP'>"+ defenderHP + "</span>");
		}
}

$("#attack").click(function() {
	if (hasDefender)
	{
		if (defenderHP > 0 || yourHP > 0)
		{
			defenderHP = defenderHP - yourAttack;
			$("#attacktext").html("<h6>You:</h6> " + attackSayings[attackCount] + " (Effectiveness: " + yourAttack + ")");
			yourAttack=yourAttack+10;
			$("#defenderHP").html(defenderHP);
		}
		if (defenderHP > 0)
		{
			yourHP = yourHP - defenderAttack;
			$("#yourHP").html(yourHP);
			$("#countertext").html("<h6>Enemy:</h6> " + insults[attackCount] + " (Effectiveness: " + defenderAttack + ")");
			attackCount++;
		}
		if (defenderHP <= 0 && enemyCount >= 1)
		{
			enemyCount--;
			$("#attack").html("Let's move on");
			$("#countertext").html("<h6>Enemy:</h6> " + "...");
			hasDefender = false;
		}
		if (yourHP <= 0)
		{
			$("#attack").html("Your whole day is ruined");
			$("#attacktext").html("<h6>You:</h6> " + "...");
			hasDefender = false;
		}
	}
	else
	{
		if (enemyCount <=0  && yourHP > 0)
		{
			$("#fightingtext").html("You won");
		}
		if (enemyCount > 0 && yourHP <= 0)
		{
			$("#fightingtext").html("You lose");
		}
		if (enemyCount > 0 &&yourHP > 0)
		{
			$("#fightingtext").html("You did not pick an enemy");
			console.log(enemyCount);
		}
	}
	});

$("#restartbtn").click(function(){
	location.reload();
});





});
