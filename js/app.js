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


// //Chinese food question
// var likesChineseFood = prompt('Does you like Chinese food?');
// //Default value because I'm lazy
// if(likesChineseFood === ''){
//     likesChineseFood = 'y'
// }
// if(likesChineseFood.toLowerCase() === 'yes' || likesChineseFood.toLowerCase() === 'y'){
//     alert('I like chinese food. Go to Spice Up in Belltown and get Mopa Tofu and Pork Belly');
// } else if(likesChineseFood.toLowerCase() === 'maybe'){
//     alert('I love chinese food. Pho is pretty good too.');
// } else {
//     alert('Who doesn\' like Chinese food?!');
// }
// console.log('the chinese food var is ' + likesChineseFood)

// //Jiu Jitsu question
// var bjjMedals = prompt('Have I won any Jiu Jitsu medals?');
// //Default value
// if(bjjMedals === ''){
//     bjjMedals = 'n'
// }
// if(bjjMedals.toLowerCase() === 'yes' || bjjMedals.toLowerCase() === 'y'){
//     alert('Good gueuss. I have won two golds and a silver');
// } else {
//     alert('Nice try. I have won two golds and a silver')
// }
// console.log('the bjjMedals var is ' + bjjMedals);

// //arctic circle
// var arcticCircle = prompt('Have I been north of the Arctic Circle?');
// //Default value
// if(arcticCircle === ''){
//     arcticCircle = 'y'
// }
// if(arcticCircle.toLowerCase() === 'yes' || arcticCircle.toLocaleLowerCase() === 'y'){
//     alert('I rode a motorcycle from Salt Lake City, Utah to Inuvik, Canada. It is about 500 miles north of the Arctic Circle.')
// } else {
//     alert('I have indeed been north of the Arctic Circle. I rode a motorcycle from Salt Lake City, Utah to Inuvik, Canada. It is about 500 miles north of the Arctic Circle.')
// }
// console.log('the arcticCircle var is ' + arcticCircle);

// //Doggo
// var doggo = prompt('Do I have a dog?');
// //Default value
// if(doggo === ''){
//     doggo = 'y'
// }
// if(doggo.toLowerCase() === 'yes' || doggo.toLowerCase() === 'y'){
//     alert('Nope, not yet. I would love to get a doggo though')
// } else {
//     alert('You are correct, but I want one!')
// }
// console.log('The doggo var is ' + doggo);

// //Coffee
// var likesCoffee = prompt('Do I like coffee?');
// //Default value
// if(likesCoffee === ''){
//     likesCoffee = 'y'
// }
// if(likesCoffee.toLowerCase() === 'yes' || likesCoffee.toLowerCase() === 'y'){
//     alert('Gotta have my go-go juice');
// } else {
//     alert('I\'m glad you think my will power is that strong, but no I\'m a coffee fiend');
// }
// console.log('The likesCoffee var is ' + likesCoffee);