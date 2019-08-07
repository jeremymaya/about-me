'use strict';

var who = prompt('What is your name?');
console.log('User\'s name is ' + who);
alert('Hello, ' + who + '! Well this is the first time we meet. Let\' play yes/no game to get to know me!');

var question1 = prompt('My real name is Jeremiah! (Y/N)');
console.log('User answered "' + question1 + '" to "My real name is Jeremiah!"');
question1 = question1.toLowerCase();
if (question1.charAt(0) === 'y') {
  alert('My real name is Kyungrae! But you can call me Jeremiah too');
}
else {
  alert('My real name is Kyungrae. How did you know Jeremiah is not my real name... o_o');
}

var question2 = prompt('I am a dog person!! (Y/N)');
console.log('User answered "' + question2 + '" to "I am a dog person!!"');
question2 = question2.toLowerCase();
if (question2.charAt(0) === 'y') {
  alert('That\'s correct!! I love dogs!! :D');
}
else {
  alert('No not really... But maybe I should name my future dog Mufasa');
}

var question3 = prompt('My favorite food is cheeseburger!!! (Y/N)');
console.log('User answered "' + question3 + '" to "My favorite food is cheeseburger!!!"');
question3 = question3.toLowerCase();
if (question3.charAt(1) === 'y') {
  alert('That\'s correct!!! Now you know where to go eat when we meet :D');
}
else {
  alert('INCORRECT!!! GO GET ME A CHEESEBURGER NOW!!!!');
}

var question4 = prompt('I am 6\'3"!!!! (Y/N)');
console.log('User answered "' + question4 + '" to "I am 6\'3"!!!!"');
question4 = question4.toLowerCase();
if (question4.charAt(0) === 'y') {
  alert('No... But I\'m still growing... Right...?');
}
else {
  alert('You right... But I\'ll be as tall as Space Needle one day!!!!');
}

var question5 = prompt('Am I using too many exclamation marks? (Y/N)');
console.log('User answered "' + question5 + '" to "Am I using too many exclamation marks"');
question5 = question5.toLowerCase();
if (question5.charAt(0) === 'y') {
  alert('Well I\'m just excited to meet you!!!!!');
}
else {
  alert('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
}
