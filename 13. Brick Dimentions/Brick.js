

// 13.  ke three dimensions of a brick: height(a), width(b) and depth(c) and check if this brick can fit into a hole with the width(w) and height(h).


const height = +prompt("Enter height of the brick:");
const width = +prompt("Enter width of the brick:");
const depth = +prompt("Enter depth of the brick:");

const w = +prompt("Enter width of hole:")
const h = +prompt("Enter height of hole:")

if (width <= w && height <= h) {
    console.log("The brick can fit in the hole")
} else {
    console.log("The brick cannot fit in the hole")
}
