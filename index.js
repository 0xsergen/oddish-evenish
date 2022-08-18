function oddishOrEvenish(number) {
    // checking if input type is integer
    if (!Number.isInteger(number)) {
        console.log(`Your input (${number}) is not an integer. Please input an integer.`)
        return
    }
    
    let sum = 0
    const inputNumber = number // to show initial input on the console
    
    // summing each digit of number
    while (number) {
        sum += number % 10;
        number = Math.floor(number / 10);
    }
    
    // getting result and printing to the console
    const result = (sum % 2 == 0) ? "Even" : "Odd" 
    console.log(`Number: ${inputNumber} | Sum: ${sum} | Type: ${result}`)

}

// to check function runs properly
// oddishOrEvenish(12445)
