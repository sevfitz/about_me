// 'use strict'

// // this script asks if Kate is my first name //
// var name = prompt('Is Kate my first name?');

// //this variable allows either letter case to be allowed and converted to uppercase//
// var nameUpper = name.toUpperCase();
// console.log(nameUpper);

// //If the answer to 'first name Kate' is no, output "Booyah!" in an element with id="name"//
// if (nameUpper === 'No' || nameUpper === 'N' || nameUpper === 'NO' || nameUpper === 'no') {
//     document.getElementById('name').innerHTML = 'Booyah!';
// }
// else {
//     alert('Oh, no!  You don\'t know me at all!');
// }
// console.log('Q1? ' + name);

// //If the answer to 'age' is yes, output "What are you trying to say?" //
// var age = prompt('Am I over 21 years old?');
// if (age.toUpperCase() === 'Y' || age.toUpperCase() === 'YES') {
//     alert('What are you trying to say?');
// }
// else {
//     alert('Thank you!');
// }
// console.log('Q2? ' + age);

// //If the answer to 'soccer' is yes, output "GOAL!" //
// var soccer = prompt('Was I once a soccer player?');
// if (soccer.toUpperCase() === 'Y' || soccer.toUpperCase() === 'YES') {
//     alert('GOAL!');
// }
// else {
//     alert('Foul!');
// }
// console.log('Q3? ' + soccer);

// //If the answer to 'microbio' is no, output "You're a good listener!" //
// var microbio = prompt('Am I a microbiologist?');
// if (microbio.toUpperCase() === 'N' || microbio.toUpperCase() === 'NO') {
//     alert('You\'re a good listener!');
// }
// else {
//     alert('Hey, I don\'t work with fungus and mold!');
// }
// console.log('Q4? ' + microbio);

// //If the answer to 'mayo' is no, output "You're right!" //
// var mayo = prompt('Do I like mayonnaise?');
// if (mayo.toUpperCase() === 'N' || mayo.toUpperCase() === 'NO') {
//     alert('You\'re right!');
// }
// else {
//     alert('If there was a mayo-free state, I\'d move there!');
// }
// console.log('Q5? ' + mayo);

// If the user answers the truffle question with 10, he will get a 'yes' response, with less than 10, he will get a 'too low' response and with more than 10, a 'too high' response. This for loop will run a max of 4 times
// for (var i = 0; i < 3; i++) {
//     var truffle = prompt('How many chocolate truffles can I eat in one sitting before getting sick?');
//     truffle = parseInt(truffle)
    
//     if (truffle === 10) {
//         alert('Yes, please join me!');
//         break;
//     } else if (truffle < 10) {
//         alert('Too low, try again.');
//     } else {
//         alert('Too high, I\'m already sick!');
//     }
// }

// The user guesses the types of cars that I've owned.  User gets 6 guesses.
var cars = ['Mustang', 'Honda']; // cars.Length is 4

//TODO check if cars equals a value in correctAnswers
for (var guesses = 0; guesses < 6 ; guesses ++ ) {
    var carsGuess = prompt('What brand of cars have I owned');
    var guessRight = false;
    console.log(carsGuess);

    //Loop over items in array
    for (var i = 0; i < cars.length; i++) {
        console.log( 'LOOP 2' );
        console.log( 'their guess' );

        if ( carsGuess === cars[i] ) {
            alert('You got it, Jack!');
            guessRight = true;
            break;
        }

        if (i === cars.length-1)  {
            alert('Bo Didley, guess again!');

        }
    }
    
    if (guessRight) {
        alert('And now you\'re done!');
        break;
    

    
    }
    

    }

    



