'use strict';
//User's name
var userName = prompt('What is your name?');

//quest prompt
var quest = prompt('Is your quest to seek the holy grail?');
if(quest.toLowerCase() === 'y' || quest.toLowerCase() === 'yes'){
    //color prompt
    var color = prompt('Is your favorite color green?');
    if(color.toLowerCase() === 'y' || color.toLowerCase() === 'yes'){
        //swallow prompt
        var swallowSpeed = prompt('Do you know the speed of laden swallow?');
        if(swallowSpeed.toLowerCase() === 'n' || swallowSpeed.toLowerCase() ==='no'){
            //bring out your dead
            var dead = prompt('Did you bring out your dead?');
            if(dead.toLowerCase() === 'y' || dead.toLowerCase() === 'yes'){
                //flesh wound
                var fleshWound = prompt('Is that mearly a flesh wound?');
                if(fleshWound.toLowerCase() === 'y' || fleshWound.toLowerCase() === 'yes'){
                    alert(userName + "! You are a true monty python nerd. Good job friend. Now go outside, it's good for you.");
                }else{
                    alert('Go watch Monty Python Holy Grail');
                }
            }else{
                alert('Go watch Monty Python Holy Grail ' + userName);
            }
        }else{
            alert('Go watch Monty Python Holy Grail ' + userName);
        }
    } else {
        alert('Go watch Monty Python Holy Grail ' + userName);
    }
} else {
    alert('Go watch Monty Python Holy Grail' + userName);
}

console.log('the userName is ' + userName);
console.log('the quest var is ' + quest);
console.log('the color var is ' + color);
console.log('the swallowSpeed var is ' + swallowSpeed);
console.log('the dead var is ' + dead);
console.log('the fleshWound var is ' + fleshWound);

//6th question
var numGuess = 1;
while(numGuess <= 4){
    //input validation
    while(true){
        var userNum = prompt('From Hitch Hiker\'s Guide to the Galaxy, what is the meaning of life?');
        userNum = Number(userNum);
        console.log('The user number is for hitch hike is '+userNum);
        //If it is not a number it will return NaN which will be false in an if statement
        if(userNum){
            break;
        } else {
            alert('Pick a number');
        }
    }
    if(userNum === 42){
        alert('Good job ' + userName +'! Nerd skills +1000');
        break;
    }else if(userNum < 42){
        alert(userName + ' a little higher (also go read Hitch Hiker\'s guide (and bring a towel). You have '+(4-numGuess)+' guesses left.');
    }else{
        alert(userName + ' guess lower, and read Hitch Hiker\'s guide (and bring a towel). You have '+(4-numGuess)+' guesses left.');
    }
    numGuess++
}

//7th question
var characters = ['Marvin the Paranoid Andriod', 'Ford Perfect', 'Dirk Gently', 'Authur Dent', 'Trillian', 'Random Dent', 'Zaphod Beeblebrox', 'Slartibartfast', 'George Gently']
var escape = false;
var numGuess = 1;
//while the guess is less than 6 and escape is not approved they are trapped in the while loop

while(numGuess <= 6 && escape === false){
    var userGuess = prompt("Name a character from Hitch Hiker's Guide to the Galaxy");
    console.log('The user guess is charaters is '+userGuess)

    //for loop to check each element in the array
    for(var i = 0; i < characters.length; i++){
        //if there's a match we celebrate and approve escape
        if(userGuess === characters[i]){
            alert('YUSSS! Another hitch hiker nerd! <3');
            escape = true;
        }
    }

    //if escape is still false then keep guessing
    if(!escape){
        alert('Keep guessing!');
    }
}