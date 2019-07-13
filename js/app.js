'use strict';
//User's name
var userName = prompt('What is your name?');
var correctGuess = 0;

// Quest prompt
function questFun(){
  //while loop for input validation
  var trapped = true;
  while(trapped){
    var quest = prompt('Is your quest to seek the holy grail?');

    if(quest.toLowerCase() === 'y' || quest.toLowerCase() === 'yes'){
      console.log('Yahtzee. Quest!>!>!');
      correctGuess++;
      trapped =false;

    }else if(quest.toLowerCase() === 'n' || quest.toLowerCase() === 'no'){
      alert('Go watch Monty Python Holy Grail ' + userName);
      trapped = false;
    }
    else{
      alert('Enter a yes or no answer');
    }
  }
}

// Color Prompt
function colorFun(){
  //while loop for input validation
  var trapped=true;
  while(trapped){
    var color = prompt('Is your favorite color green?');

    if(color.toLowerCase() === 'y' || color.toLowerCase() === 'yes'){
      console.log('Yahtzee. Quest!>!>!');
      correctGuess++;
      trapped = false;

    }else if(color.toLowerCase() === 'n' || color.toLowerCase() === 'no'){
      alert('Go watch Monty Python Holy Grail ' + userName);
      trapped = false;

    }else{
      alert('Enter a yes or no answer');
    }
  }
}

// Swallow prompt
function swallowFun(){
  //while loop for input validation
  var trapped = true;
  while(trapped){
    var swallowSpeed = prompt('Do you know the speed of laden swallow?');

    if(swallowSpeed.toLowerCase() === 'n' || swallowSpeed.toLowerCase() ==='no'){
      console.log('Yahtzee. Quest!>!>!');
      correctGuess++;
      trapped = false;

    }else if(swallowSpeed.toLowerCase() === 'y' || swallowSpeed.toLowerCase() ==='yes'){
      alert('Go watch Monty Python Holy Grail ' + userName);
      trapped = false;

    }else{
      alert('Enter a yes or no answer');
    }
  }
}

// Dead prompt
function deadFun(){
  //while loop for input validation
  var trapped = true;
  while(trapped){
    var dead = prompt('Did you bring out your dead?');

    if(dead.toLowerCase() === 'y' || dead.toLowerCase() === 'yes'){
      console.log('Yahtzee. Quest!>!>!');
      correctGuess++;
      trapped = false;

    }else if(dead.toLowerCase() === 'n' || dead.toLowerCase() === 'no'){
      alert('Go watch Monty Python Holy Grail ' + userName);
      trapped = false;

    }else{
      alert('Enter a yes or no answer');
    }
  }
}

// FleshWound prompt
function fleshwoundFun(){
  //while loop for input validation
  var trapped = true;
  while(trapped){
    var fleshWound = prompt('Is that mearly a flesh wound?');

    if(fleshWound.toLowerCase() === 'y' || fleshWound.toLowerCase() === 'yes'){
      console.log('Yahtzee. Quest!>!>!');
      correctGuess++;
      trapped = false;

    }else if(fleshWound.toLowerCase() === 'n' || fleshWound.toLowerCase() === 'no'){
      alert('Go watch Monty Python Holy Grail ' + userName);
      trapped = false;

    }else{
      alert('Enter a yes or no answer');
    }
  }
}

// -------------------6th question------------------//

function question6(maxGuess=4, answer=42){
  var numGuess = 1;
  while(numGuess <= maxGuess){

    //input validation
    while(true){
      var userNum = prompt('From Hitch Hiker\'s Guide to the Galaxy, what is the meaning of life?');
      userNum = Number(userNum);
      console.log('The userNum is '+userNum+', and the nmaxGuess is '+maxGuess+', and the answer is '+answer);

      //If it is not a number it will return NaN which will be false in an if statement
      if(userNum){
        break;
      } else {
        alert('Pick a number');
      }
    }

    if(userNum === answer){
      alert('Good job ' + userName +'! Nerd skills +1000');
      correctGuess++;
      break;
    }else if(userNum < answer){
      alert(userName + ' a little higher (also go read Hitch Hiker\'s guide (and bring a towel). You have '+(maxGuess-numGuess)+' guesses left.');
    }else{
      alert(userName + ' guess lower, and read Hitch Hiker\'s guide (and bring a towel). You have '+(maxGuess-numGuess)+' guesses left.');
    }
    numGuess++;
  }

}


//7th question
function question7(characters, maxGuess) {
  var escape = false;
  var numGuess = 1;
  //while the guess is less than 6 and escape is not approved they are trapped in the while loop
  while(numGuess <= maxGuess && escape === false){
    var userGuess = prompt('Name a character from Hitch Hiker\'s Guide to the Galaxy');
    console.log('The user guess is charaters is '+userGuess+', and the maxGuess is '+maxGuess)

    //for loop to check each element in the array
    for(var i = 0; i < characters.length; i++){
      //if there's a match we celebrate and approve escape
      if(userGuess.toLowerCase() === characters[i].toLowerCase()){
        alert('YUSSS! Another hitch hiker nerd! <3');
        escape = true;
        correctGuess++;
      }
    }

    //if escape is still false then keep guessing
    if(!escape){
      alert('Keep guessing! You have '+(maxGuess-numGuess)+' guesses left.');
    }
    numGuess++;
  }
  alert('The correct answers for Hitch Hikers characters are; \'Marvin the Paranoid Andriod\', \'Ford Perfect\', \'Dirk Gently\', \'Authur Dent\', \'Trillian\', \'Random Dent\', \'Zaphod Beeblebrox\', \'Slartibartfast\', \'George Gently\'');

  alert('You got '+correctGuess+' correct answers. There are 7 possible. Will the missing answers haunt you?');

}

//---------------------Executable Code-----------------------
questFun();
colorFun();
swallowFun();
deadFun();
fleshwoundFun();
if(correctGuess === 5){
  alert('Good Job, you Monty Python nerd, you. There are mountains outside to climb now...it\'s good for you.');
}

question6();

question7(['Marvin the Paranoid Andriod', 'Ford Perfect', 'Dirk Gently', 'Authur Dent', 'Trillian', 'Random Dent', 'Zaphod Beeblebrox', 'Slartibartfast', 'George Gently'], 6);
