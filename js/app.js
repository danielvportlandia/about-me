'use strict';

var userName = prompt('Hi there, what\'s your name? '); //this global variable stores the user's name.
var correctAnswers = 0; //correct answers counter
var questionTotal = 0; //total questions counter
var guessCount; //guess counter

alert('Hi ' + userName + ', mighty nice of you to take the time to review my project! I am going to ask you a few fun questions about myself. Please answer the following 5 questions with y/n or yes/no.');
console.log('User was asked their name, responded with ' + userName + '.');

function game1() {
  var answer1 = prompt('Do you think I\'ve always liked the Seahawks ' + userName + '?').toLowerCase().trim();
  console.log('User was asked if they thought I liked the Seahawks, responded with ' + answer1 + '.');
  questionTotal++;

  if (answer1 === 'no' || answer1 === 'n') { //correct answer
    console.log(userName + ' answered correctly with ' + answer1 + '.');
    alert('You\'re right ' + userName + '! I\'m from Oregon where it is all about college football.');
    ++correctAnswers;
  } else if (answer1 === 'yes' || answer1 === 'y') { //incorrect answer
    console.log(userName + ' answered incorrectly with ' + answer1 + '.');
    alert('Sadly, no ' + userName + ', I did not start rooting for them until I moved up here to Washington from way down south (Oregon).');
  } else { //invalid answer
    console.log(userName + ' notified that entry was an invalid answer.');
    alert('Sorry! That was an invalid answer.');
  }

  var answer2 = prompt('Next question! Being a native Oregonian, do you think I am a Ducks fan?').toLowerCase().trim();
  console.log('User was asked if they thought I am a Ducks fan being from Oregon, responded with ' + answer2 + '.');
  questionTotal++;

  if (answer2 === 'no' || answer2 === 'n') {
    console.log(userName + ' answered correctly with ' + answer2 + '.');
    alert('You are correct ' + userName + '! I have a sister that went to OSU so my family are all Beavers fans!');
    ++correctAnswers;
  } else if (answer2 === 'yes' || answer2 === 'y'){
    console.log(userName + ' answered incorrectly with ' + answer2 + '.');
    alert('Sorry, ' + userName + ', you are sadly mistaken. I am a Beavers fan. Let\'s move on.');
  } else {
    console.log(userName + ' notified that entry was an invalid answer.');
    alert('Sorry! That was an invalid answer.');
  }

  var answer3 = prompt('Alas, I digress about all this football talk. Ok ' + userName + ', do you think I like this rainy and bleak Washington weather?').toLowerCase().trim();
  console.log('User was asked if they thought I liked the weather in Washington, responded with ' + answer3 + '.');
  questionTotal++;

  if (answer3 === 'yes' || answer3 === 'y') {
    console.log(userName + ' answered correctly with ' + answer3 + '.');
    alert('Correct! IN FACT I LOVE IT ' + userName + '!');
    ++correctAnswers;
  } else if (answer3 === 'no' || answer3 === 'n') {
    console.log(userName + ' answered incorrectly with ' + answer3 + '.');
    alert('Actually I do like it ' + userName + ', in fact I LOVE IT!');
  } else {
    console.log(userName + ' notified that entry was an invalid answer.');
    alert('Sorry! That was an invalid answer.');
  }

  var answer4 = prompt(userName + ', do you think I have any kids?').toLowerCase().trim();
  console.log('User was asked if they thought I had any kids, responded with ' + answer4 + '.');
  questionTotal++;

  if (answer4 === 'yes' || answer4 === 'y') {
    console.log(userName + ' answered correctly with ' + answer4 + '.');
    alert('Right you are ' + userName + '! I have a 1yr old daughter, you could probably tell from the bags under my eyes.');
    ++correctAnswers;
  } else if(answer4 === 'no' || answer4 === 'n') {
    console.log(userName + ' answered incorrectly with ' + answer4 + '.');
    alert('Sorry ' + userName + ' but nope, I have a 1yr old daughter if you couldn\'t tell from the bags under my eyes.');
  } else {
    console.log(userName + ' notified that entry was an invalid answer.');
    alert('Sorry! That was an invalid answer.');
  }

  var answer5 = prompt('So ' + userName + ' do you think I ever owned a groundhog?').toLowerCase().trim();
  console.log('User was asked if they thought if I ever owned a groundhog, responded with ' + answer5 + '.');
  questionTotal++;

  if (answer5 === 'no' || answer5 === 'n') {
    console.log(userName + ' answered correctly with ' + answer5 + '.');
    alert('You are correct ' + userName + ', I never owned one of those but I did have a pet prarie dog named Sammy when I 10.');
    ++correctAnswers;
  } else if (answer5 === 'yes' || answer5 === 'y') {
    console.log(userName + ' answered incorrectly with ' + answer5 + '.');
    alert('Nope, never had one of those ' + userName + ', I did however used to own a prairie dog named Sammy when I was 10.');
  } else {
    console.log(userName + ' notified that entry was an invalid answer.');
    alert('Sorry! That was an invalid answer.');
  }
}

function game2() { //this is a 'guess a number' game which includes a guess counter for a finite # of guesses.

  var answer6 = prompt('Ok ' + userName + ', now lets go back to my childhood. What do you think is the most cats my family has owned at one time?').toLowerCase().trim();
  console.log('User was asked how many cats my family owned when I was a child, they responded with ' + answer6 + '.');
  guessCount = 4;
  questionTotal++;
  var randomNum = [Math.floor(Math.random()*30)];
  var myNum = randomNum[0]; //correct answer is randomly generated.
  console.log(myNum);

  while (guessCount > 0) { //while loop ends when guesses are exhausted.
    guessCount--;
    console.log('guess number ' + guessCount + '.');
    answer6 = parseInt(answer6);
    if (answer6 === myNum) { //correct answer
      console.log(answer6, myNum);
      alert('Wow great guess ' + userName + ', You are correct!');
      guessCount = 0;
      ++correctAnswers;
    } else if (answer6 !== myNum && guessCount === 1) { //last guess message.
      console.log(userName + ' notified that last answer was wrong and that this is their last attempt.');
      answer6 = prompt('Uh oh, you have ' + guessCount + ' guess left. Good luck!');
    } else if (answer6 > myNum && guessCount > 0) { //answer too high.
      console.log(userName + ' entered an amount higher than ' + answer6 + '.');
      answer6 = prompt('That\'s too high ' + userName + ', you have ' + guessCount + ' guesses left, guess again.');
    } else if (answer6 < myNum && guessCount > 0) { //answer too low.
      console.log(userName + ' entered an amount lower than ' + answer6 + '.');
      answer6 = prompt('That\'s too low ' + userName + ', you have ' + guessCount + ' guesses left, guess again.');
    } else { //invalid answer
      console.log(userName + ' notified that entry was an invalid answer.');
      answer6 = prompt('Invalid answer, please guess the number of cats again.');
    }
  }
  if (answer6 !== myNum && guessCount <= 0) { //user notified that last guess was wrong and 0 guesses remain, ends function
    console.log(userName + ' notified that their answer was wrong and that was their last guess.');
    alert('Sorry ' + userName + ' but that was your last guess, let\'s move on.');
  }
}

/*this game requires the user to guess an element within an array, there are a finite amount of guesses, once the answer is correct or guesses are exhausted, game ends.*/
function game3() {

  var animalArr = ['mini horse', 'llama', 'goat', 'sheep'];
  var answer7 = prompt('I grew up on a farm, now can you guess at least one kind of farm animal we owned?').toLowerCase().trim();
  guessCount = 5;
  questionTotal++;

  while (guessCount > 0) { //while loop ends when guesses are exhausted.
    guessCount--;
    for (var i = 0; i < animalArr.length; i++) { //iterates through the animalArr variable.
      console.log('Guess animal was ' + answer7 + '. Remaining guess number is ' + guessCount + '.');
      if (animalArr.includes(answer7)) { //the includes method checks each element & returns true if 1 element matches.
        console.log(userName + ' answered correctly with ' + answer7 + '.');
        alert('Great guess ' + userName + ', I did have one of those.');
        guessCount = 0;
        ++correctAnswers;
        break;
      } else if (guessCount === 1) { //last guess message.
        answer7 = prompt('Uh oh, you have ' + guessCount + ' guess left. Good luck!');
        console.log('1 guess left.');
        break;
      } else { //incorrect guess.
        console.log(userName + ' did not enter a correct index of ' + animalArr + '.');
        answer7 = prompt('Nope, didn\'t have one of those, you have ' + guessCount + ' guesses left ' + userName + '.');
        break;
      }
    }
  }
  alert('As far as farm animals are concerned, we owned a small herd of mini-horses, a llama, 3 goats, and a couple   sheep.'); //animalArr answers revealed.
}

game1();
game2();
game3();

if (correctAnswers === questionTotal) { //perfect score notification.
  console.log('Alerts ' + userName + ' that they got a perfect score with ' + correctAnswers + ' answers correct.');
  alert('Wow ' + userName + '! You got ' + correctAnswers + ' out of ' + questionTotal + ' answers correct! If you knew all these questions about me then perhaps I talk too much.');
} else if (correctAnswers > 0) { //score notification if greater than 0.
  console.log('Alerts ' + userName + ' to the number of correct answers, which is ' + correctAnswers + '.');
  alert('Congratulations ' + userName + '! You got ' + correctAnswers + ' out of ' + questionTotal + ' answers correct.');
} else { //user notified that they got 0 correct answers.
  console.log('Alerts ' + userName + ' that they did not get any correct answers.');
  alert('Oh no ' + userName + ', you got ' + correctAnswers + ' answers correct. Better luck next time.');
}