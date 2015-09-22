var score = 0;

var silverPoint = 10;

var captainshieldPiont = 200;

var goldPoint = 25;

var refinedPoint = 5

var nothingPoint = 1;

var diamondPoint = 50;
// these variables are for the score they are for differnent values 

var computerChoice;

var start = new Date();

var count=30;
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
	computerChoice = Math.floor(Math.random()*100);
	if(computerChoice < 5){
		computerChoice = "Diamond";
			$('#received').text("You got Diamond");
			
			score = diamondPoint + score;
			$('#Score').text('Your Score ' + score);
	}
	else if(computerChoice > 55){
		computerChoice = "Nothing";	
			$('#received').text("You got Rocks");
			score = nothingPoint + score;	
			$('#Score').text('Your Score ' + score);
	}	
	else if(computerChoice > 5 && computerChoice < 16){
		computerChoice = "Gold";
			$('#received').text("You got Gold");
			score = goldPoint + score;
			$('#Score').text('Your Score ' + score);
	}
	else if(computerChoice > 16 && computerChoice < 31){
		computerChoice = "Silver";
			$('#received').text("You got Silver");	
			score = silverPoint + score;
			$('#Score').text('Your Score ' + score);
	}
	else if(computerChoice > 31 && computerChoice <33 ){
		computerChoice = "Shield";
			alert("You got The Shield");	
			score = captainshieldPiont + score;
	}
	else if(computerChoice > 33 && computerChoice < 55){
		computerChoice = "Refined Rocks";
			$('#received').text("You got Refined Rocks");
			score = refinedPoint + score;
			$('#Score').text('Your Score ' + score);
	}
});







