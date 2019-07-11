'use strict';
//User's name
var userName = prompt('What is your name?');
var correctGuess = 0;

// quest prompt
var quest = prompt('Is your quest to seek the holy grail?');
if(quest.toLowerCase() === 'y' || quest.toLowerCase() === 'yes'){
    //color prompt
    correctGuess++;
    var color = prompt('Is your favorite color green?');
    if(color.toLowerCase() === 'y' || color.toLowerCase() === 'yes'){
        //swallow prompt
        correctGuess++;
        var swallowSpeed = prompt('Do you know the speed of laden swallow?');
        if(swallowSpeed.toLowerCase() === 'n' || swallowSpeed.toLowerCase() ==='no'){
            //bring out your dead
            correctGuess++;
            var dead = prompt('Did you bring out your dead?');
            if(dead.toLowerCase() === 'y' || dead.toLowerCase() === 'yes'){
                //flesh wound
                correctGuess++;
                var fleshWound = prompt('Is that mearly a flesh wound?');
                if(fleshWound.toLowerCase() === 'y' || fleshWound.toLowerCase() === 'yes'){
                    correctGuess++;
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
    alert('Go watch Monty Python Holy Grail ' + userName);
}

console.log('the userName is ' + userName);
console.log('the quest var is ' + quest);
console.log('the color var is ' + color);
console.log('the swallowSpeed var is ' + swallowSpeed);
console.log('the dead var is ' + dead);
console.log('the fleshWound var is ' + fleshWound);

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
        numGuess++
    }

}


//7th question
function question7(characters, maxGuess) {
    var escape = false;
    var numGuess = 1;
    
    //while the guess is less than 6 and escape is not approved they are trapped in the while loop
    while(numGuess <= maxGuess && escape === false){
        var userGuess = prompt("Name a character from Hitch Hiker's Guide to the Galaxy");
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
    }
    alert("The correct answers for Hitch Hikers characters are; 'Marvin the Paranoid Andriod', 'Ford Perfect', 'Dirk Gently', 'Authur Dent', 'Trillian', 'Random Dent', 'Zaphod Beeblebrox', 'Slartibartfast', 'George Gently'")
    
    alert('You got '+correctGuess+' correct answers. There are 7 possible. Will the missing answers haunt you?')

}

//---------------------Executable Code-----------------------

// question6();

// question7(['Marvin the Paranoid Andriod', 'Ford Perfect', 'Dirk Gently', 'Authur Dent', 'Trillian', 'Random Dent', 'Zaphod Beeblebrox', 'Slartibartfast', 'George Gently'], 6);