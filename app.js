var score = 0;

var lavaPoint = 1000;

var avalanchePoint = 5000;

var diamondminePoint = 50000;

var silverPoint = 15;

var BetterMiners

var goldminePoint = 10000;

var goldPoint = 1179;

var nothingPoint = 10;

var diamondPoint = 5000;
// these variables are for the score they are for differnent values 

var computerChoice;

var start = new Date();

var count=60;
// The count starts here

var counter=setInterval(timer, 1000); //1000 will  run it every 1 second
function timer()
{
  count=count-1;
  if (count <= 0)
  {
  	location.reload();
  	// Every 1000 it heads down by one
     clearInterval(counter);
     //counter ended, do something here
     return;
  }

	$("#Timer").text(count);
}
$("#zane").click(function(){
//everything below this is for the text that pops up and how the values work
	computerChoice = Math.floor(Math.random()*215);
	if(computerChoice > 5 && computerChoice < 11){
		computerChoice = "Diamond";
			$('#received').text("You got Diamond");
			score = diamondPoint + score;
			$('#Score').text('You have $' + score);
	}
	else if(computerChoice > 134){
		computerChoice = "Nothing";	
			$('#received').text("You got Rocks");
			score = nothingPoint + score;	
			$('#Score').text('You have $' + score);
	}	
	else if(computerChoice > 10 && computerChoice < 21){
		computerChoice = "Gold";
			$('#received').text("You got Gold");
			score = goldPoint + score;
			$('#Score').text('You have $' + score);
	}
	else if(computerChoice > 20 && computerChoice < 126){
		computerChoice = "Silver";
			$('#received').text("You got Silver");	
			score = silverPoint + score;
			$('#Score').text('You have $' + score);
	}
	else if(computerChoice > 0 && computerChoice < 2){
		computerChoice = "Diamond Mine";
			alert("You Found a Diamond Mine");	
			score = diamondminePoint + score;
	}
	else if(computerChoice > 1 && computerChoice < 6){
		computerChoice = "Gold Mine";
			alert("You found a Gold Mine");	
			score = goldminePoint + score;
	}
	else if(computerChoice > 125 && computerChoice < 131){
		computerChoice = "Lava";
			alert("You fell in Lava");	
			score = score - lavaPoint;	
	}
	else if(computerChoice > 130 && computerChoice < 135){
		computerChoice = "Avalanche";
			alert("An Avalanche fell on you");	
			score = score - avalanchePoint;	
	}	
});







