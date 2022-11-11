

// 1. Take 5 integers. Find the biggest and smallest number.

const a = 25
const b = 36
const c = -52
const d = 0
const e = 15

let smallest = a, biggest = a;

if (b < smallest) {
    smallest = b
} else if (c < smallest) {
    smallest = c
} else if (d < smallest) {
    smallest = d
} else if (e < smallest) {
    smallest = e
}


if (b > biggest) {
    biggest = b
} else if (c > biggest) {
    biggest = c
} else if (d > biggest) {
    biggest = d
} else if (e > biggest) {
    biggest = e
}

console.log("Smallest Number: ", smallest)
console.log("Biggest Number: ", biggest)