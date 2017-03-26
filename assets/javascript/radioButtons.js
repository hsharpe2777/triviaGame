var time = 0;

var interval = 0;

var correctAnswer = "";

var rightAmount = 0;
var wrongAmount = 0;




function timeConverter (t) {

    //  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (minutes === 0) {
      minutes = "00";
    }

    else if (minutes < 10) {
      minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
  }





var questions = [

{
	"question": "In the TV show Rugrats, who is Angelica to Tommy?",
	"answer": "first cousin",
	"wrongAnswer1": "best friend",
	"wrongAnswer2":"younger sister"

},

{
	"question": "What was a 'Wonderball'?",
	"answer": "Chocolate Candy in the shape of a ball, filled with treats",
	"WrongAnswer1" : "A pretend phsychic ball that glowed when you wave your hand over it",
	"WrongAnswer2" : "A ball that lit up with different colors"
},

{
	"question": "Will, the Fresh-Prince, spent most of his days _______ before moving to Bel Air",
	"answer": "On the playground in West Philadelphia",
	"WrongAnswer1" : "In the barbershop in West Philadelphia",
	"WrongAnswer2" : "In the hood of West Philadelphia"
},

{
	"question": "Who is the main character of the Cartoon, the Wild Thornberries",
	"answer": "Eliza Thornberry",
	"WrongAnswer1" : "Kara Thornberry",
	"WrongAnswer2" : "Dippity Thornberry"
},

{
	"question": "'I Don't Want No' ______, are lyrics from hit song in the 90s by TLC.",
	"answer": "Scrub",
	"WrongAnswer1" : "Scab",
	"WrongAnswer2" : "Sponge"
}, 

{
	"question": "'Who does Arnold have a crush on, in 'Hey Arnold'?",
	"answer": "Lila Sawyer",
	"WrongAnswer1" : "Helga Pitaki",
	"WrongAnswer2" : "Phoebe Heyerdahl"
},

{
	"question": "'What was the highest grossing film in the 90s'?",
	"answer": "Titanic",
	"WrongAnswer1" : "The Lion King",
	"WrongAnswer2" : "Forrest Gump"
}

];


 

//start game
reset();


function reset(){



		//computer randomly generated question.
		var computerGuess = questions[Math.floor(Math.random() * questions.length)];
		
		

		restartTime();



		//display randomly guessed question
		$("#question").html(computerGuess.question);



		//find the matching wrong choices by using the index of the question
		var matchIndex = questions.indexOf(computerGuess);


		//create array to store list of choices (answer & wrongAnswers)
		var mixedChoices = [];

		//store list of choices (answer & wrongAnswers)
		mixedChoices.push(computerGuess.answer);
		mixedChoices.push(wrongAnswers[matchIndex].answer1);
		mixedChoices.push(wrongAnswers[matchIndex].answer2);


		//clear answers element
		$("#answers").html("");



		//call CheckDisplay function to display choices that aren't already displayed
		checkDisplayAnswers();
		
		
		





			//function to display choices that aren't already displayed
			function checkDisplayAnswers(){

					var randomDisplay = [];
					var choice = "";
					//display choices in random order

					var choice = mixedChoices[Math.floor(Math.random() * mixedChoices.length)];
					randomDisplay.push(choice);
					$("#answers").append("<input type=" + "'radio'" + "name="+ "'option1'" + "value=" + "'option'" + ">" + choice + "<br>"+ "<br>");

					//if choice is already in randomDisplay array  
					for (var i = 0; randomDisplay.length !==3; i++){

							var choice = mixedChoices[Math.floor(Math.random() * mixedChoices.length)];
							if (randomDisplay.indexOf(choice) < 0){ 
								randomDisplay.push(choice);
								console.log(questions[matchIndex].answer);

									if(choice === questions[matchIndex].answer){
									
										$("#answers").append("<input type=" + "'radio'" + "name="+ "'rightAnswer'" + "id=" + "'rightAnswer'" + "unchecked" + "value='rightAnswer'" + ">" + choice + "<br>"+ "<br>");
										
										
										
									}
								      else{

								      $("#answers").append("<input type=" + "'radio'" + "name="+ "'wrongAnswer'" + "id=" + "'wrongAnswer'"+ "value=" + "'option1'" + ">" + choice + "<br>"+ "<br>");
								     
								      }

								}
							}
				}

			
			  
			function checkAnswer(){
					var status = $("#rightAnswer").prop('checked');
				     console.log(status);
				     rightCheck();

				     var wrongStatus = $("#wrongAnswer").prop('checked');
				     console.log(wrongStatus);
				     wrongCheck();
				

				function rightCheck(){
					if(status === true){
						$("#question").html("That's right!");
						$("#answers").html("<br>");
						rightAmount++;
				 		nextButton();


					}
				}
				function wrongCheck(){
					if(wrongStatus === true){
						$("#question").html("That's Wrong! The Answer is...");
						$("#answers").html("<br>" + computerGuess.answer);
						wrongAmount++;
						nextButton();

					}

}};
			
	

			function count(){
			time --;
			var status = $("#rightAnswer").prop('checked');
			var wrongStatus = $("#wrongAnswer").prop('checked');
			checkAnswer();

		 	//Get the current time, pass that into the stopwatch.timeConverter function,
		    // and save the result in a variable.
		    var convertTime = timeConverter(time);
		     //setInterval to start the count here.
		    

		    console.log (convertTime);
		    //Use the variable you just created to show the converted time in the "display" div.

		    $("#timer").html(convertTime);

		    if (convertTime <"00:00"){
					$("#question").html("The Correct Answer is ");
					$("#answers").html(computerGuess.answer + "<br>");
					$("#timer").html("00:10");
					wrongAmount++;
					nextButton();

				}

			
			}



			function restartTime(){

				clearInterval(interval);
				time = 5;

				 //set the "timer" div to "00:10."

				    $("#timer").html("00:05");
				    interval = setInterval(count, 1000);

				  }

             function nextButton(){
             	// This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
		          var btn = $("<button>");
		          // Adding a class of movie to our button
		          btn.addClass("next");
		          // Adding a data-attribute
		          btn.attr("data-name", "Next");
		          // Providing the initial button text
		          btn.text("Next");
		          // Adding the button to the buttons-view div
		          $("#answers").append("<br>")
		          $("#answers").append(btn);

		           // Adding a click event listener to all elements with a class of "movie"
      				$(document).on("click", ".next", reset);
             }


	}



