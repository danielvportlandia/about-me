'use strict';

var userName = prompt('What is your name Codefellows employee? ');

alert('Hi ' + userName + ', mighty nice of you to take the time to review my project! I am going to ask you a few fun questions about myself. Please answer with y/n or yes/no.');

var answer1 = prompt('Do you think I\'ve always liked the Seahawks ' + userName + '?').toLowerCase().trim();

if (answer1 === 'no' || answer1 === 'n') {
  alert('You\'re right ' + userName + '! I\'m from Oregon where it is all about college football.');
} else if (answer1 === 'yes' || answer1 === 'y') {
  alert('Sadly, no ' + userName + ', I did not start rooting for them until I moved up here to Washington from way down south (Oregon).');
} else {
  alert('Sorry! That was an invalid answer');
}
console.log('User was asked if they thought I liked the Seahawks, responded with ' + answer1 + '.');

var answer2 = prompt('Next question! Being a native Oregonian, do you think I am a Ducks fan?').toLowerCase().trim();

if (answer2 === 'no' || answer2 === 'n') {
  alert('You are correct ' + userName + '! I have a sister that went to OSU so my family are all Beavers fans!');
} else if (answer2 === 'yes' || answer2 === 'y'){
  alert('Sorry, ' + userName + ', you are sadly mistaken. I am a Beavers fan. Let\'s move on.');
} else {
  alert('Sorry! That was an invalid answer');
}
console.log('User was asked if they thought I am a Ducks fan being from Oregon, responded with ' + answer2 + '.');

var answer3 = prompt('Alas, I digress about all this football talk. Ok ' + userName + ', do you think I like this rainy and bleak Washington weather?').toLowerCase().trim();

if (answer3 === 'yes' || answer3 === 'y') {
  alert('Wrong! I ACTUALLY LOVE IT ' + userName + '!');
} else if (answer3 === 'no' || answer3 === 'n') {
  alert('Actually I do like it ' + userName + ', in fact I LOVE IT!');
} else {
  alert('Sorry! That was an invalid answer');
}
console.log('User was asked if they thought I liked the weather in Washington, responded with ' + answer3 + '.');
var answer4 = prompt(userName + ', do you think I have any kids?').toLowerCase().trim();

if (answer4 === 'yes' || answer4 === 'y') {
  alert('Right you are ' + userName + '! I have a 1yr old daughter, you could probably tell from the bags under my eyes.');
} else if(answer4 === 'no' || answer4 === 'n') {
  alert('Sorry ' + userName + ' but nope, I have a 1yr old daughter if you couldn\'t tell from the bags under my eyes.');
} else {
  alert('Sorry! That was an invalid answer');
}
console.log('User was asked if they thought I had any kids, responded with ' + answer4 + '.');

var answer5 = prompt('So ' + userName + ' back when I was single, do you think I owned 30 cats?').toLowerCase().trim();

if (answer5 === 'no' || answer5 === 'n') {
  alert('You are correct ' + userName + ', I only owned 2 cats, I wasn\'t quite THAT crazy!');
} else if (answer5 === 'yes' || answer5 === 'y') {
  alert('Whoa hold on ' + userName + '. I only owned 2 cats, 30 would be kinda crazy, just imagine the smell! Gross.');
} else {
  alert('Sorry! That was an invalid answer');
}
console.log('User was asked if they thought if I owned 30 cats when I was single, responded with ' + answer5 + '.');
