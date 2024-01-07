# Simon Challenge Game Project
- This Simon repo contains variety of Exercise for solving problem how to activate the sounds when user can tap in the color game.

## Steps by Steps of how this game was built 
 ======= STEP 1. Add JavaScript and jQuery ========= ///
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
