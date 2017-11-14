$(document).ready(function(){
var gameStarted = false;
var britneyHP = 150;
var johnHP = 100;
var momHP = 200;
var philHP = 180;

var yourHP = 0;
var yourAttack = 0;
var strongEnemyHP = 100;
var strongerEnemyHP = 150;
var strongestEnemyHP = 200;
var defenderHP = 0;
var hasDefender = false;

$("#britneyHP").html("HP: "+ britneyHP);
$("#johnHP").html("HP: "+ johnHP);
$("#momHP").html("HP: "+ momHP);
$("#philHP").html("HP: "+ philHP);



function startGame(){
	gameStarted = true;
	if (gameStarted === true)
	{
		$("#startbox").html("");
	}
}

$( "#choice1" ).click(function() {
	startGame();
	$("#yourcharacter").html("<img src='assets/images/profileimg.png'><br>"+"Britney on her Period"+"<br>HP: "+britneyHP);
	$("#enemy1btn").html("<img src='assets/images/profileimg.png'><br>"+"Frenemy Sasha"+"<br>HP: "+strongestEnemyHP);
	$("#enemy2btn").html("<img src='assets/images/profileimg.png'><br>"+"Boyfriend John"+"<br>HP: "+strongEnemyHP);
	$("#enemy3btn").html("<img src='assets/images/profileimg.png'><br>"+"Cashier at Starbucks"+"<br>HP: "+strongerEnemyHP);
	yourAttack = 25;
	$("#enemy1btn").click(function() {
		if (hasDefender === false)
		{
			hasDefender = true;
			$("#enemy1").html("");
			defenderHP = strongestEnemyHP;
			$("#defender").html("<img src='assets/images/profileimg.png'><br>"+"Frenemy Sasha"+"<br>HP: <span id='defenderHP'>"+ defenderHP + "</span>");
			$("#attack").click(function() {
				if (defenderHP > 0 || yourHP > 0)
				{
					defenderHP=defenderHP-yourAttack;
					yourAttack=yourAttack+yourAttack;
					$("#defenderHP").html(defenderHP);
					if (defenderHP < 0)
					{
						console.log("hasDefenderisnowFalse");
						hasDefender = false;
					}
				}
			});
		}
	});
	$("#enemy2btn").click(function() {
		if (hasDefender === false)
		{
			console.log("this has ran")
			hasDefender = true;
			$("#enemy2").html("");
			$("#defender").html("<img src='assets/images/profileimg.png'><br>"+"Boyfriend John"+"<br>HP: <span id='defenderHP'>"+ strongEnemyHP + "</span>");
		}
	});
	$("#enemy3btn").click(function() {
		if (hasDefender === false)
		{
			hasDefender = true;
			$("#enemy3").html("");
			$("#defender").html("<img src='assets/images/profileimg.png'><br>"+"Cashier at Starbucks"+"<br>HP: <span id='defenderHP'>"+ strongerEnemyHP + "</span>");
		}
	});
});


$( "#choice2" ).click(function() {
	startGame();
	$("#yourcharacter").html("<img src='assets/images/profileimg.png'><br>"+"Regular John"+"<br>HP: "+johnHP);
	$("#enemy1btn").html("<img src='assets/images/profileimg.png'><br>"+"Traffic at 5pm"+"<br>HP: "+strongEnemyHP);
	$("#enemy2btn").html("<img src='assets/images/profileimg.png'><br>"+"Girlfriend on Period Britney"+"<br>HP: "+strongestEnemyHP);
	$("#enemy3btn").html("<img src='assets/images/profileimg.png'><br>"+"Manager Mike"+"<br>HP: "+strongerEnemyHP);
	$("#enemy1btn").click(function() {
		if (hasDefender === false)
		{
			hasDefender = true;
			$("#enemy1").html("");
			$("#defender").html("<img src='assets/images/profileimg.png'><br>"+"Traffic at 5pm"+"<br>HP: <span id='defenderHP'>"+ strongEnemyHP + "</span>");
		}
	});
	$("#enemy2btn").click(function() {
		if (hasDefender === false)
		{
			hasDefender = true;
			$("#enemy2").html("");
			$("#defender").html("<img src='assets/images/profileimg.png'><br>"+"Girlfriend on Period Britney"+"<br>HP: <span id='defenderHP'>"+ strongestEnemyHP + "</span>");
		}
	});
	$("#enemy3btn").click(function() {
		if (hasDefender === false)
		{
			hasDefender = true;
			$("#enemy3").html("");
			$("#defender").html("<img src='assets/images/profileimg.png'><br>"+"Manager Mike"+"<br>HP: <span id='defenderHP'>"+ strongerEnemyHP + "</span>");
		}
	});
});


$( "#choice3" ).click(function() {
	startGame();
	$("#yourcharacter").html("<img src='assets/images/profileimg.png'><br>"+"Menopausal Mom"+"<br>HP: "+momHP);
	$("#enemy1btn").html("<img src='assets/images/profileimg.png'><br>"+"Cashier at Safeway"+"<br>HP: "+strongestEnemyHP);
	$("#enemy2btn").html("<img src='assets/images/profileimg.png'><br>"+"Husband Henry"+"<br>HP: "+strongerEnemyHP);
	$("#enemy3btn").html("<img src='assets/images/profileimg.png'><br>"+"Teenage Son Steven"+"<br>HP: "+strongEnemyHP);
});
$( "#choice4" ).click(function() {
	startGame();
	$("#yourcharacter").html("<img src='assets/images/profileimg.png'><br>"+"Farmer Phil"+"<br>HP: "+philHP);
	$("#enemy1btn").html("<img src='assets/images/profileimg.png'><br>"+"Cow"+"<br>HP: "+strongerEnemyHP);
	$("#enemy2btn").html("<img src='assets/images/profileimg.png'><br>"+"Neighbor Nick"+"<br>HP: "+strongEnemyHP);
	$("#enemy3btn").html("<img src='assets/images/profileimg.png'><br>"+"Alien"+"<br>HP: "+strongestEnemyHP);
});






});
