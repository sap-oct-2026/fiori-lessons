// execute this code in the terminal with 
// `node main.js`

// let studentA = "Joe";
// let studentB = "Bob";

// studentA = studentB;
// studentB = "Martha";

// console.log(studentA);
// console.log(studentB);

const employeeA = {
    name: "Jane",
    position: "CEO"
};

const employeeB = {
    name: "James",
    position: "CFO"
};

// const employeeC = employeeB;
// const employeeC = Object.assign({}, employeeB);
const employeeC = {...employeeB};

employeeB.name = "Bob";

console.log(employeeA);
console.log(employeeB);
console.log(employeeC);

