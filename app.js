var score = 0; 

var diamondminePoint = 550,050;

var silverPoint = 15;

var BetterMiners

var goldminePoint = 100,000;

var goldPoint = 1,179;

var nothingPoint = 10;

var diamondPoint = 5,000;
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
	computerChoice = Math.floor(Math.random()*200);
	if(computerChoice > 4 && computerChoice < 11){
		computerChoice = "Diamond";
			$('#received').text("You got Diamond");
			score = diamondPoint + score;
			$('#Score').text('You have $' + score);
	}
	else if(computerChoice > ){
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
	else if(computerChoice > 20 && computerChoice < 101){
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
	else if(computerChoice > 1 && computerChoice < 5){
		computerChoice = "Gold Mine";
			alert("You found a Gold Mine");	
			score = goldminePoint + score;
	}
});







