

// 2. Take a 3 character string and find if it is a sandwich string. Sandwich string is when the first and last character is consonant and the middle one is a vowel.

const inputString = prompt("Enter any 3-character String: ")

console.log("Your entered String: ", inputString)

const char1 = inputString.toLowerCase().charAt(0)
const char2 = inputString.toLowerCase().charAt(1)
const char3 = inputString.toLowerCase().charAt(2)

if (!"aeiou".includes(char1) && "aeiou".includes(char2) && !"aeiou".includes(char3)) {

    console.log("Yes, this is a Sandwich String!")

} else {
    console.log("Sorry, this is Not a Sandwich String")
}





