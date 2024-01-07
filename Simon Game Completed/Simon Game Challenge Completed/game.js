// ======= STEP 1. Add JavaScript and jQuery ========= ///
// 1. Create a new file called game.js
// 2. Link to this new external JS file from your index.html
// 3. Add an alert to game.js and test that the alert gets triggered when you load up index.html in Chrome.
// 4. Add jQuery to your website and test that it's successfully loaded by opening Chrome developer tools and typing $("h1")

// ======= STEP 2. Create a New Pattern ========= //
// 1. Inside game.js create a new function called nextSequence()
// 2. Inside the new function generate a new random number between 0 and 3, and store it in a variable called randomNumber
// 3. At the top of the game.js file, create a new array called buttonColours and set it to hold the sequence "red", "blue", "green", "yellow" .
// 4. Create a new variable called randomChosenColour and use the randomNumber from step 2 to select a random colour from the buttonColours array.
// 5. At the top of the game.js file, create a new empty array called gamePattern.
// 6. Add the new randomChosenColour generated in step 4 to the end of the gamePattern.

// ======= STEP 3. Show the Sequence to the User with Animations and Sounds ========= //
// 1. Use jQuery to select the button with the same id as the randomChosenColour
// 2. Use jQuery to animate a flash to the button selected in step 1

// ======= STEP 4. Check Which Button is Pressed ========= //
// 1. Use jQuery to detect when any of the buttons are clicked and trigger a handler function.
// 2. Inside the handler, create a new variable called userChosenColour to store the id of the button that got clicked.
// 3. At the top of the game.js file, create a new empty array with the name userClickedPattern.
// 4. Add the contents of the variable userChosenColour created in step 2 to the end of this new userClickedPattern

// ======= STEP 5. Add Sounds to the Button Clicks ========= //
// 1. In the same way played sound in nextSequence(), when a user click on a button, the corresponding sound should be played. e.g. if the Green Button is clicked, then green.mp3 should be played.
// 2. Create a new function called playSound() that takes a single input parameter called name.
// 3. Take the code we used to play sound in the nextSequence() function and move it to playSound().
// 4. Refactor the code in playSound() so that it will work for both playing sound in nextSequence() and when the user clicks a button.

// ======= STEP 6. Add Animations to User Clicks ========= //
// 1. Create a new function called animatePress(), it should take a single input parameter called currentColour.
// 2. Take a look inside the styles.css file, you can see there is a class called "pressed", it will add a box shadow and changes the background colour to grey.
// 3. Use jQuery to add this pressed class to the button that gets clicked inside animatePress().
// 4. Use Google/Stackoverflow to figure out how you can use Javascript to remove the pressed class after a 100 milliseconds.

// ======= STEP 7. Starting the Game ========= //
// 1. Use jQuery to detect when a keyboard key has been pressed, when that happens for the first time, call nextSequence().
// 2. 2. Create a new variable called level and start at level 0.
// 3. The h1 title starts out saying "Press A Key to Start", when the game has started, change this to say "Level 0".
// 4. Inside nextSequence(), increase the level by 1 every time nextSequence() is called.

// ======= STEP 8. Check the User's Answer against the Game Sequence ========= //
// 1. Create a new function called checkAnswer(), it should take one input with the name currentLevel
// 2. Call checkAnswer() after a user has clicked and chosen their answer, passing in the index of the last answer in the user's sequence.
// 3. Write an if statement inside checkAnswer() to check if the most recent user answer is the same as the game pattern. If so then log "success", otherwise log "wrong".
// 4. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
// 5. Call nextSequence() after a 1000 millisecond delay.
// 6. Once nextSequence() is triggered, reset the userClickedPattern to an empty array ready for the next level.

// ======= STEP 9. Game Over ========= //
// 1. In the sounds folder, there is a sound called wrong.mp3, play this sound if the user got one of the answers wrong.
// 2. In the styles.css file, there is a class called "game-over",apply this class to the body of the website when the user gets one of the answers wrong and then remove it after 200 milliseconds.
// 3. Change the h1 title to say "Game Over, Press Any Key to Restart" if the user got the answer wrong.

// ======= STEP 10. Restart the Game ========= //
// 1. Create a new function called startOver().
// 2. Call startOver() if the user gets the sequence wrong.
// 3. Inside this function, you'll need to reset the values of level, gamePattern and started variables.

var buttonColours = ["red", "blue", "green", "yellow"]; // Step 2 ---> (3)

var gamePattern = []; // Step 2 ---> (5)
var userClickedPattern = []; // Step 4 ---> (3)

var started = false;
var level = 0; // Step 7 ---> (2)

$(document).keypress(function() { // Step 7 ---> (1)
  if (!started) { 
    $("#level-title").text("Level " + level); // Step 7 ---> (3)
    nextSequence(); // Step 7 ---> (4)
    started = true; // Step 7 ---> (5)
  }
});

$(".btn").click(function() { // Step 4 ---> (1)

  var userChosenColour = $(this).attr("id"); // Step 4 ---> (2)
  userClickedPattern.push(userChosenColour); // Step 4 ---> (4)

  playSound(userChosenColour); // Step 5 ---> (1)
  animatePress(userChosenColour); // Step 3 ---> (2)

  checkAnswer(userClickedPattern.length-1); // Step 8 ---> (2)
});

function checkAnswer(currentLevel) { // Step 8 ---> (1)
// You can now use these log statements along with logging the values of userClickedPattern and gamePattern in the 
// Chrome Developer Tools console to check whether if your code is performing as you would expect and debug your code as needed. Once you're done, feel free to remove these log statements.
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) { // Step 8 ---> (3)
      if (userClickedPattern.length === gamePattern.length){ // Step 8 ---> (4)
        setTimeout(function () { 
          nextSequence();
        }, 1000); // Step 8 ---> (5)
      }
    } else {
      playSound("wrong");
      $("").addClass("game-over"); // CSS Step 9 ---> (3)
      $("#level-title").text("Game Over, Press Any Key to Restart");

      setTimeout(function () {
        $().removeClass("game-over"); // CSS Step 9 ---> (2)
      }, 200);

      startOver(); // Step 10 ---> (2)
    } 
}

function nextSequence() { // Step 2 ---> (1)
  userClickedPattern = []; // Step 8 ---> (6)
  level++;
  $("#level-title").text("Level " + level);
  var randomNumber = Math.floor(Math.random() * 4); // Step 2 ---> (2)
  var randomChosenColour = buttonColours[randomNumber]; // Step 2 ---> (4)
  gamePattern.push(randomChosenColour); // Step 2 ---> (6)

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100); // Step 3 ---> (1)
  playSound(randomChosenColour); // Step 3 ---> (2)
}

function animatePress(currentColor) { // Step 6 ---> (1)
  $("#" + currentColor).addClass("pressed"); // Step 6 --> (2)
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed"); // Step 6 ---> (3)
  }, 100);
}

function playSound(name) { // Step 5 ---> (2)
  var audio = new Audio("sounds/" + name + ".mp3"); // Step 5 ---> (3)
  audio.play();
}

function startOver() { // Step 10 ---> (1)
  level = 0;
  gamePattern = []; // Step 10 ---> (3)
  started = false;
}
