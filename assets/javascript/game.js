$(document).ready(function(){
var gameStarted = false;

var yourHP = 150;
var yourAttack = 10;
var defenderHP = 0;
var defenderAttack = 0;
var strongEnemyHP = 150;
var strongerEnemyHP = 200;
var strongestEnemyHP = 200;
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
			attackSayings = ["Hi Sasha, how's my second best friend doing?", "Your bald spots are showing. Want to go shopping for a new wig?", "After that, let's go find you something cute to wear that doesn't make you look so fat.", "That leaves us with a lot of time to talk about ", "attack 5", "attack 6"];
			insults = ["OMG, I thought you were a man. What's up, girl?", "Yeah, maybe on the way, we can stop by the salon to get your chin waxed", "We also have to fin", "insult 4", "insult 5", "insult 6"];
			defenderAttack = 25;
			$("#attack").html(attackSayings[0]);
			prepEnemy("#enemy1", strongestEnemyHP, "Frenemy Sasha", "sasha");
			attackCount = 0;
		}
	});
	$("#enemy2btn").click(function() {
		if (hasDefender === false && yourHP > 0)
		{
			defenderAttack = 15;
			$("#attack").html("Say hi");
			attackSayings = ["bfattack 1", "bfattack 2", " bfattack 3", "bfattack 4", "bfattack 5", "bfattack 6"];
			insults = ["What did you do to your hair?", "bf insult 2", "bf insult 3", "bf insult 4", "bf insult 5", "bf insult 6"];
			prepEnemy("#enemy2", strongEnemyHP, "Boyfriend John", "john");
			attackCount = 0;
		}
	});
	$("#enemy3btn").click(function() {
		if (hasDefender === false && yourHP > 0)
		{
			defenderAttack = 10;
			$("#attack").html("Say hi");
			attackSayings = ["cashattack 1", "cashattack 2", " cashattack 3", "cashattack 4", "cashattack 5", "cashattack 6"];
			insults = ["What did you do to your hair?", "cash insult 2", "cash insult 3", "cash insult 4", "cash insult 5", "cash insult 6"];
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
			defenderAttack = 25;
			$("#attack").html("Let's go somewhere");
			attackSayings = ["beep beep", "beep"];
			insults = ["What did you do to your hair?", "insult 2", "insult 3", "insult 4", "insult 5", "insult 6"];
			prepEnemy("#enemy1", strongEnemyHP, "Traffic at 5pm", "traffic");
			attackCount = 0;
		}
	});
	$("#enemy2btn").click(function() {
		if (hasDefender === false && yourHP > 0)
		{
			defenderAttack = 15;
			$("#attack").html("Say hi");
			attackSayings = ["bfattack 1", "bfattack 2", " bfattack 3", "bfattack 4", "bfattack 5", "bfattack 6"];
			insults = ["What did you do to your hair?", "bf insult 2", "bf insult 3", "bf insult 4", "bf insult 5", "bf insult 6"];
			prepEnemy("#enemy2", strongestEnemyHP, "Girlfriend on Period Britney", "britney");
			attackCount = 0;
		}
	});
	$("#enemy3btn").click(function() {
		if (hasDefender === false && yourHP > 0)
		{
			defenderAttack = 10;
			$("#attack").html("Say hi");
			attackSayings = ["cashattack 1", "cashattack 2", " cashattack 3", "cashattack 4", "cashattack 5", "cashattack 6"];
			insults = ["What did you do to your hair?", "cash insult 2", "cash insult 3", "cash insult 4", "cash insult 5", "cash insult 6"];
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
			$("#attack").html("Let's go somewhere");
			attackSayings = ["beep beep", "beep"];
			insults = ["What did you do to your hair?", "insult 2", "insult 3", "insult 4", "insult 5", "insult 6"];
			prepEnemy("#enemy1", strongestEnemyHP, "Cashier at Safeway", "safeway");
			attackCount = 0;
		}
	});
	$("#enemy2btn").click(function() {
		if (hasDefender === false && yourHP > 0)
		{
			defenderAttack = 15;
			$("#attack").html("Say hi");
			attackSayings = ["bfattack 1", "bfattack 2", " bfattack 3", "bfattack 4", "bfattack 5", "bfattack 6"];
			insults = ["What did you do to your hair?", "bf insult 2", "bf insult 3", "bf insult 4", "bf insult 5", "bf insult 6"];
			prepEnemy("#enemy2", strongerEnemyHP, "Husband Henry", "henry");
			attackCount = 0;
		}
	});
	$("#enemy3btn").click(function() {
		if (hasDefender === false && yourHP > 0)
		{
			defenderAttack = 10;
			$("#attack").html("Say hi");
			attackSayings = ["cashattack 1", "cashattack 2", " cashattack 3", "cashattack 4", "cashattack 5", "cashattack 6"];
			insults = ["What did you do to your hair?", "cash insult 2", "cash insult 3", "cash insult 4", "cash insult 5", "cash insult 6"];
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
			defenderAttack = 25;
			$("#attack").html("Let's go somewhere");
			attackSayings = ["beep beep", "beep"];
			insults = ["What did you do to your hair?", "insult 2", "insult 3", "insult 4", "insult 5", "insult 6"];
			prepEnemy("#enemy1", strongerEnemyHP, "Cow", "cow");
			attackCount = 0;
		}
	});
	$("#enemy2btn").click(function() {
		if (hasDefender === false && yourHP > 0)
		{
			defenderAttack = 15;
			$("#attack").html("Say hi");
			attackSayings = ["bfattack 1", "bfattack 2", " bfattack 3", "bfattack 4", "bfattack 5", "bfattack 6"];
			insults = ["What did you do to your hair?", "bf insult 2", "bf insult 3", "bf insult 4", "bf insult 5", "bf insult 6"];
			prepEnemy("#enemy2", strongEnemyHP, "Neighbor Nick", "nick");
			attackCount = 0;
		}
	});
	$("#enemy3btn").click(function() {
		if (hasDefender === false && yourHP > 0)
		{
			defenderAttack = 10;
			$("#attack").html("Say hi");
			attackSayings = ["cashattack 1", "cashattack 2", " cashattack 3", "cashattack 4", "cashattack 5", "cashattack 6"];
			insults = ["What did you do to your hair?", "cash insult 2", "cash insult 3", "cash insult 4", "cash insult 5", "cash insult 6"];
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
			yourAttack=yourAttack+10;
			$("#defenderHP").html(defenderHP);
			$("#attack").html(attackSayings[attackCount+1]);
			$("#fightingtext").html(insults[attackCount]);
			console.log("Defender: "+ defenderHP+ "Attack: "+yourAttack);
			attackCount++;
		}
		if (defenderHP > 0)
		{
			yourHP = yourHP - defenderAttack;
			$("#yourHP").html(yourHP);
			console.log("Your health: "+yourHP);
		}
		if (defenderHP <= 0 && enemyCount >= 1)
		{
			enemyCount--;
			$("#attack").html("Let's go do something else");
			hasDefender = false;
		}
		if (yourHP <= 0)
		{
			$("#attack").html("You couldn't take it anymore, and now your whole day is ruined");
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
