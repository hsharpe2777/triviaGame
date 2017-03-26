var time = 0;

var interval = 0;

var correctAnswer = "";

var wrongAmount = 0;

var rightAmount = 0;
var wordIndex = 0;




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
"wrongAnswer1" : "best friend",
"wrongAnswer2" : "younger sister"

},

{
"question" : "What is a 'Wonderball?",
"answer": "Chocolate Candy in the shape of a ball, filled with treats",
"wrongAnswer1" : "A pretend phsychic ball that glowed when you wave your hand over it",
"wrongAnswer2": "A ball that lit up with different colors"
},

{
"question": "Will, the Fresh-Prince, spent most of his days _______ before moving to Bel Air",
"answer": "On the playground in West Philadelphia",
"wrongAnswer1" : "In the barbershop in West Philadelphia",
"wrongAnswer2": "In the hood of West Philadelphia"
},

{
"question": "Who is the main character of the Cartoon, the Wild Thornberries",
"answer": "Eliza Thornberry",
"wrongAnswer1": "Kara Thornberry",
"wrongAnswer2": "Dippity Thornberry"
},

{
"question": "'I Don't Want No' ______, are lyrics from hit song in the 90s by TLC.",
"answer": "Scrub",
"wrongAnswer1" : "Scab",
"wrongAnswer2" : "Sponge"
}, 

{"question": "'Who does Arnold have a crush on, in 'Hey Arnold'?",
"answer": "Lila Sawyer",
"wrongAnswer1" : "Helga Pitaki",
"wrongAnswer2": "Phoebe Heyerdahl"
},

{
"question": "'What was the highest grossing film in the 90s'?",
"answer": "Titanic",
"wrongAnswer1" : "The Lion King",
"wrongAnswer2": "Forrest Gump"
},

{
"question": "'How many championships did the Chicago Bulls win in the 90s'?",
"answer": "6",
"wrongAnswer1": "4",
"wrongAnswer2": "8"
},

{
"question": "'Who was president in 1992'?",
"answer": "George H W Bush",
"wrongAnswer1": "Bill Clinton",
"wrongAnswer2": "Theodore Roosevelt"
},

{
"question": "Finish the lyrics: 'You are my fire____?",
"answer": "...the one desire",
"wrongAnswer1": "...the one required",
"wrongAnswer2": "...with nice attire"
}

];


// var wrongAnswers = [
// {
// "WrongAnswer1" : "best friend",
// "WrongAnswer2" : "younger sister"
// },


// {
// "WrongAnswer1" : "A pretend phsychic ball that glowed when you wave your hand over it",
// "WrongAnswer2": "A ball that lit up with different colors"
// },

// {
// "WrongAnswer1" : "In the barbershop in West Philadelphia",
// "WrongAnswer2": "In the hood of West Philadelphia"
// },

// {
// "WrongAnswer1": "Kara Thornberry",
// "WrongAnswer2": "Dippity Thornberry"
// },

// {
// "WrongAnswer1" : "Scab",
// "WrongAnswer2" : "Sponge"
// }, 

// {
// "WrongAnswer1" : "Helga Pitaki",
// "WrongAnswer2": "Phoebe Heyerdahl"
// },
// {
// "WrongAnswer1" : "The Lion King",
// "WrongAnswer2": "Forrest Gump"
// },

// {
// "WrongAnswer1": "4",
// "WrongAnswer2": "8"
// },

// {
// "WrongAnswer1": "Bill Clinton",
// "WrongAnswer2": "Theodore Roosevelt"
// }, 

// {
// "WrongAnswer1": "...the one required",
// "WrongAnswer2": "...with nice attire"
// }

// ];


 var alreadyAsked = [];

//start game
createStartButton();




function reset(){

		for (var i = 0; i<questions.length; i++){
			console.log(questions[i].question);

		//computer randomly generated question.
		var computerGuess = questions[i].question;

		var alreadyAskedIndex = alreadyAsked.indexOf(computerGuess);

		if(alreadyAskedIndex < 0){


		alreadyAsked.push(computerGuess.question);
		
		

		restartTime();

		console.log("wrong amount" + wrongAmount);
		console.log("right amount" + rightAmount);




		//display randomly guessed question
		$("#question").html(computerGuess.question);



		//find the matching wrong choices by using the index of the question
		var matchIndex = questions.indexOf(computerGuess);


		//create array to store list of choices (answer & wrongAnswers)
		var mixedChoices = [];

		//store list of choices (answer & wrongAnswers)
		mixedChoices.push(computerGuess.answer);
		mixedChoices.push(computerGuess.wrongAnswer1);
		mixedChoices.push(computerGuess.wrongAnswer2);


		//clear answers element
		$("#answers").html("");



		//call CheckDisplay function to display choices that aren't already displayed
		checkDisplayAnswers();
		
}		

}



			//function to display choices that aren't already displayed
			function checkDisplayAnswers(){

					var randomDisplay = [];
					var choice = "";
					//display choices in random order

					var choice = mixedChoices[Math.floor(Math.random() * mixedChoices.length)];
					randomDisplay.push(choice);

									if(choice === questions[matchIndex].answer){
									
										$("#answers").append("<input type=" + "'radio'" + "name="+ "'rightAnswer'" + "id=" + "'rightAnswer'" + "unchecked" + "value='rightAnswer'" + ">" + choice + "<br>"+ "<br>");

										
										
									}
								      else{

								      $("#answers").append("<input type=" + "'radio'" + "name="+ "'wrongAnswer'" + "class=" + "'wrongAnswer'"+ "unchecked"+ "value=" + "'option1'" + ">" + choice + "<br>"+ "<br>");

								      }

					//if choice is already in randomDisplay array  
					for (var i = 0; randomDisplay.length !==3; i++){

							var choice = mixedChoices[Math.floor(Math.random() * mixedChoices.length)];
							if (randomDisplay.indexOf(choice) < 0){ 
								randomDisplay.push(choice);
								//console.log(questions[matchIndex].answer);

									if(choice === questions[matchIndex].answer){
									
										$("#answers").append("<input type=" + "'radio'" + "name="+ "'rightAnswer'" + "id=" + "'rightAnswer'" + "unchecked" + "value='rightAnswer'" + ">" + choice + "<br>"+ "<br>");
									
										
									}
								      else{

								      $("#answers").append("<input type=" + "'radio'" + "name="+ "'wrongAnswer'" + "class=" + "'wrongAnswer'"+ "unchecked"+ "value=" + "'option1'" + ">" + choice + "<br>"+ "<br>");

								      }

								}
							}
				}

			
			  
			function checkAnswer(){
					var status = $("#rightAnswer").prop('checked');
				  
				     rightCheck();

				   	var wrongStatus;


				      $( ".wrongAnswer").each(function() {
				      	
 					 	 var isWrong = $( this ).prop( 'checked' );
 					 	if(isWrong === true){
 					 		wrongStatus = true;
 					 	}
					 });

				     //console.log(wrongStatus);
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

}
};
			
	

			function count(){
			time --;
		
			checkAnswer();

		 	//Get the current time, pass that into the stopwatch.timeConverter function,
		    // and save the result in a variable.
		    var convertTime = timeConverter(time);
		     //setInterval to start the count here.
		    

		    
		    //Use the variable you just created to show the converted time in the "display" div.

		    $("#timer").html(convertTime);

		    if (convertTime <"00:00"){
					$("#question").html("The Correct Answer is ");
					$("#answers").html(computerGuess.answer + "<br>");
					$("#timer").html("00:05");
					console.log(wrongAmount);
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

	     function createStartButton(){

             	// This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
		          var newbtn = $("<button>");
		          // Adding a class of movie to our button
		          newbtn.addClass("start");
		          // Adding a data-attribute
		          newbtn.attr("data-name", "start");
		          newbtn.attr("id", "start");
		          // Providing the initial button text
		          newbtn.text("START");
		          $("#question").html("");
		          // Adding the button to the answers div
		          $("#answers").html("<br>");
		          $("#answers").html(newbtn);

		          // Adding a click event listener to all elements with a class of "movie"
      			  $(document).on("click", ".start", displayStartButton);


             }

         function displayStartButton(){
         	timerDiv();
         	reset();
         	
         }


         function timerDiv(){

         	// This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
		          var newbtn = $("<div>");
		          // Adding a class of movie to our button
		          newbtn.addClass("timer");
		          // Adding a data-attribute
		          newbtn.attr("data-name", "timer");
		          newbtn.attr("id", "timerDiv");
		         
		          // Adding the button to the buttons-view div
		          $("#gameBody").append(newbtn);
		          timerPara();


         }

         function timerPara(){
         	// This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
		          var newbtn = $("<p>");
		          // Adding a class of movie to our button
		          newbtn.addClass("timer");
		          // Adding a data-attribute
		          newbtn.attr("data-name", "timer");
		          newbtn.attr("id", "timer");
		         
		          // Adding the button to the buttons-view div
		          $("#timerDiv").append(newbtn);




         }

         function endGame(){
         	var total = rightAmount + wrongAmount;

         	if (total = 6){

         		$("#question").html("GAME OVER");
		          // Adding the button to the buttons-view div
		        $("#answers").html("Correct: " + rightAmount);
		        $("#answers").html("Wrong: " + wrongAmount);


         	}
         }


