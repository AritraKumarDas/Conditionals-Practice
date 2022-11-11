
const a = +prompt("Enter value of a:")
const b = +prompt("Enter value of b:")
const c = +prompt("Enter value of c:")

console.log("a= ", a)
console.log("b= ", b)
console.log("c= ", c)

const discSqr = Math.pow(b, 2) - (4 * a * c)

console.log("DiscSqr= ", discSqr)


let xA, xB;

if (discSqr >= 0) {
    xA = (-b + Math.sqrt(discSqr)) / (2 * a)
    xB = (-b - Math.sqrt(discSqr)) / (2 * a)

    console.log("Root A=", xA.toFixed(2))
    console.log("Root B=", xB.toFixed(2))

} else {
    console.log("The Quadratic Equation has imaginary roots")
}


