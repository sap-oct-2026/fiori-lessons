const personA = {
    name: "Joe",
    address: {
        city: "Paris",
        country: "France"
    }
}

// const personB = {...personA};

// use JSON conversion sideeffects to do a deep copy!
// const personB = JSON.parse(JSON.stringify(personA));
const personB = structuredClone(personA);

personB.name = "Bob";
personB.address.city = "Marseille";

console.log(personA);
console.log(personB);

