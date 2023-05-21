// dont mistake closures for An IIFE (Immediately Invoked Function Expression)

const addPeople = () => {
    let people = [];
    
    return (person) => {
        return people = [...people, person];
    }
}

let people_one;
const slot1 = addPeople();
slot1("mum");
slot1("scovia");
slot1("russell");

// people_one variable will hold everyone in the slot 1
people_one = slot1("joy");

console.log(people_one);
