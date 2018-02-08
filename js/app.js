'use strict';

var userName = prompt('What is your name Codefellows employee? ');
var correctAnswers = 0;

alert('Hi ' + userName + ', mighty nice of you to take the time to review my project! I am going to ask you a few fun questions about myself. Please answer with y/n or yes/no.');
console.log('User was asked their name, responded with ' + userName + '.');

var answer1 = prompt('Do you think I\'ve always liked the Seahawks ' + userName + '?').toLowerCase().trim();
console.log('User was asked if they thought I liked the Seahawks, responded with ' + answer1 + '.');

if (answer1 === 'no' || answer1 === 'n') {
  console.log(userName + ' answered correctly with ' + answer1 + '.');
  alert('You\'re right ' + userName + '! I\'m from Oregon where it is all about college football.');
  ++correctAnswers;
} else if (answer1 === 'yes' || answer1 === 'y') {
  console.log(userName + ' answered incorrectly with ' + answer1 + '.');
  alert('Sadly, no ' + userName + ', I did not start rooting for them until I moved up here to Washington from way down south (Oregon).');
} else {
  console.log(userName + ' notified that entry was an invalid answer.');
  alert('Sorry! That was an invalid answer.');
}

var answer2 = prompt('Next question! Being a native Oregonian, do you think I am a Ducks fan?').toLowerCase().trim();
console.log('User was asked if they thought I am a Ducks fan being from Oregon, responded with ' + answer2 + '.');

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

var answer5 = prompt('So ' + userName + ' back when I was single (and an adult), do you think I owned 30 cats?').toLowerCase().trim();
console.log('User was asked if they thought if I owned 30 cats when I was single (and an adult), responded with ' + answer5 + '.');

if (answer5 === 'no' || answer5 === 'n') {
  console.log(userName + ' answered correctly with ' + answer5 + '.');
  alert('You are correct ' + userName + ', I only owned 2 cats, I wasn\'t quite THAT crazy!');
  ++correctAnswers;
} else if (answer5 === 'yes' || answer5 === 'y') {
  console.log(userName + ' answered incorrectly with ' + answer5 + '.');
  alert('Whoa hold on ' + userName + '. I only owned 2 cats, 30 would be kinda crazy, just imagine the smell! Gross.');
} else {
  console.log(userName + ' notified that entry was an invalid answer.');
  alert('Sorry! That was an invalid answer.');
}

var answer6 = prompt('Ok ' + userName + ', now lets go back to my childhood. What do you think is the most cats my family has owned at one time?').toLowerCase().trim();
var guessCount = 4;
console.log('User was asked how many cats my family owned when I was a child, they responded with ' + answer6 + '.');

while (guessCount > 1) {
  console.log('guess number ' + guessCount + ' is ' + answer6);
  answer6 = parseInt(answer6);
  if (answer6 === 27) {
    console.log(userName + ' answered correctly with ' + answer6 + '.');
    alert('Wow great guess ' + userName + ', You are correct!');
    guessCount = -1;
    ++correctAnswers;
  } else if (answer6 > 27) {
    console.log(userName + ' entered an amount higher than ' + answer6 + '.');
    guessCount--;
    answer6 = prompt('That\'s too high ' + userName + ', you have ' + guessCount + ' guesses left, guess again.');
  } else if (answer6 < 27) {
    console.log(userName + ' entered an amount lower than ' + answer6 + '.');
    guessCount--;
    answer6 = prompt('That\'s too low ' + userName + ', you have ' + guessCount + ' guesses left, guess again.');
  } else {
    console.log(userName + ' notified that entry was an invalid answer.');
    guessCount--;
    answer6 = prompt('Invalid answer, please guess the number of cats.');
  }
}
if (answer6 !== 27) {
  console.log(userName + ' notified that their answer was wrong and that that was the last guess.');
  alert('Sorry ' + userName + ' but that was your last guess, let\'s move on.');
}

var animalArr = ['mini horse', 'llama', 'goat', 'sheep'];
var answer7 = prompt('I grew up on a farm, now can you guess at least one kind of animal I owned?').toLowerCase().trim();
guessCount = 5;

while (guessCount > 0) {
  for (var i = 0; i < animalArr.length; i++) {
    console.log('Guess animal was ' + answer7 + '.');
    console.log('guess number is ' + guessCount + '.');
    if (animalArr.includes(answer7)) {
      console.log(userName + ' answered correctly with ' + answer7 + '.');
      alert('Great guess ' + userName + ', I did have one of those.');
      guessCount = 0;
      ++correctAnswers;
      break;
    } else if (guessCount <= 0) {
      console.log('Guess attempts exhausted, loop is terminated.');
      break;
    }
    else {
      console.log(userName + ' did not enter a correct index of ' + animalArr + '.');
      prompt('Nope, didn\'t have one of those, you have ' + guessCount + ' guesses left ' + userName + '.');
      --guessCount;
    }
  }
}
alert('Growing up on the farm we owned mini-horses, llamas, goats, and sheep.');

if (correctAnswers > 0) {
  console.log('Alerts ' + userName + ' to the number of correct answers, which is ' + correctAnswers + '.');
  alert('Congratulations ' + userName + '! You got ' + correctAnswers + ' answers correct!');
} else {
  console.log('Alerts ' + userName + ' that they did not get any correct answers.');
  alert('Oh no ' + userName + ', you got ' + correctAnswers + ' answers correct. Better luck next time.');
}