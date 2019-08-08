'use strict';

var score = 0;

var who = prompt('What is your name?');
console.log('User\'s name is ' + who);
alert('Hello, ' + who + '! Well this is the first time we meet. Let\' play yes/no game to get to know me!');

var question1 = prompt('My real name is Jeremiah! (Y/N)');
console.log('User answered "' + question1 + '" to "My real name is Jeremiah!"');
question1 = question1.toLowerCase();
if (question1.charAt(0) === 'y') {
  alert('My real name is Kyungrae! But you can call me Jeremiah too');
  score++;
}
else {
  alert('My real name is Kyungrae. How did you know Jeremiah is not my real name... o_o');
}

var question2 = prompt('I am a dog person!! (Y/N)');
console.log('User answered "' + question2 + '" to "I am a dog person!!"');
question2 = question2.toLowerCase();
if (question2.charAt(0) === 'y') {
  alert('That\'s correct!! I love dogs!! :D');
  score++;
}
else {
  alert('No not really... But maybe I should name my future dog Mufasa');
}

var question3 = prompt('My favorite food is cheeseburger!!! (Y/N)');
console.log('User answered "' + question3 + '" to "My favorite food is cheeseburger!!!"');
question3 = question3.toLowerCase();
if (question3.charAt(1) === 'y') {
  alert('That\'s correct!!! Now you know where to go eat when we meet :D');
  score++;
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
  score++;
}

var question5 = prompt('Am I using too many exclamation marks? (Y/N)');
console.log('User answered "' + question5 + '" to "Am I using too many exclamation marks"');
question5 = question5.toLowerCase();
if (question5.charAt(0) === 'y') {
  alert('Well I\'m just excited to meet you!!!!!');
}
else {
  alert('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
  score++;
}

for (var i = 1; i <= 4; i++) {
  var question6 = prompt('What is my favorite number??? You get 4 tries');
  question6 = parseInt(question6);

  if (question6 === 3) {
    alert('That\'s Correct! My favorite number is 3! Good work!');
    score++;
    break;
  }
  else if (question6 < 3 && i < 4) {
    alert('That\'s too low. Try again! (' + i + '/4)');
  }
  else if (question6 > 3 && i < 4) {
    alert('That\'s too high. Try again! (' + i + '/4)');
  }
  else if (question6 < 3 && i === 4) {
    alert('That\'s still too low. Booo nice try...  (' + i + '/4)');
  }
  else if (question6 > 3 && i === 4) {
    alert('That\'s still too high. Booo nice try... (' + i + '/4)');
  }
  else {
    alert('Type in a number to answer the question!!! (' + i + '/4)');
  }
}
console.log('User attempted ' + (i - 1) + ' times to answer "What is my favorite number?"');

var answerKey7 = ['Seattle', 'Chicago', 'Seoul', 'Atlanta', 'New York', 'Portland'];
var userKey7 = [];

for (var j = 1; j <= 6; j++){
  var question7 = prompt('Can you guess a city I have visited? You get 6 tries!');

  for (var k = 0; k <= answerKey7.length - 1; k++) {
    if (answerKey7[k].toLowerCase() === question7.toLowerCase()) {
      userKey7.push(true);
    }
    else {
      userKey7.push(false);
    }
  }

  if (userKey7.includes(true)) {
    alert('That\'s correct! I have visted ' + answerKey7.join(', '));
    score++;
    break;
  }
  else if (j < 6) {
    alert('That\'s incorrect! Try again! (' + j + '/6)');
  }
  else {
    alert('Still incorrect! (' + j + '/6). I have visted ' + answerKey7.join(', ') );
  }
}
console.log('User attempted ' + (j - 1) + ' times to answer "Can you guess a city I have visited"');

alert('You got ' + score + ' out of 7 questions correct, ' + who + '! It\'s time to get to know me more!');
