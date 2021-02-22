let maximum = parseInt(prompt("Enter your maximum number!"));

while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number!"));
}



let targetnum = Math.floor(Math.random() * maximum) + 1;

let guess = parseInt(prompt("Enter your first guess!"));
let attempts = 1;

while (parseInt(guess) !== targetnum) {
    if (guess == 'q') {
        break;
    }
    attempts++;
    if (guess > targetnum) {
        guess = prompt("Too high, enter a new guess")
    }

    if (guess < targetnum) {
        guess = prompt("Too low, enter a new guess")
    }

}

if (guess === 'q') {
    console.log('Okay, you quit!')
}
else {
    console.log('You got it!')
    console.log(`It took you ${attempts} guesses`)
}