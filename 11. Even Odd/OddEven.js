

// 11. Given number is odd or even? Negative or positive?

const num = +prompt("Enter any integer number:")

console.log("Entered Number: ", num)

if (num !== parseInt(num)) {
    console.log("Invalid input. Enter Integers only.")
} else {
    if (num > 0) {
        if (num % 2 === 0) {
            console.log("The number is Positive & Even")
        } else {
            console.log("The number is Positive & Odd")
        }
    } else if (num < 0) {
        if (num % 2 === 0) {
            console.log("The number is Negative & Even")
        } else {
            console.log("The number is Negative & Odd")
        }
    } else {
        console.log("The number is Zero")
    }
}



