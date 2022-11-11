

// 8. Take the user's yearly salary. If salary is 5 LPA, tax is 0. If greater than 10 LPA, tax is 15%, if greater than 14 LPA, tax is 30%. Find the inhand salary.


const grossSal = +prompt("Enter your Yearly Salary:");

console.log("Gross Salary: Rs " + grossSal)

let tax;

if (grossSal <= 500000) {
    tax = 0;
} else if (grossSal <= 1000000) {
    tax = (grossSal - 500000) * .05
} else if (grossSal <= 1400000) {
    tax = 0 + (500000 * .05) + (grossSal - 1000000) * 0.15
} else {
    tax = 0 + (500000 * .05) + (400000 * 0.15) + (grossSal - 1400000) * 0.30
}

const inhandSal = grossSal - tax;


console.log("Tax Liability: Rs " + tax)
console.log("Inhand Salary Rs " + inhandSal)

document.getElementById('gross').innerHTML = `Gross Salary: Rs ${grossSal}`
document.getElementById('tax').innerHTML = `Tax Liability: Rs ${tax}`
document.getElementById('net').innerHTML = `Inhand Salary: Rs ${inhandSal}`