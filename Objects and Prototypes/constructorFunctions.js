// Special functions that are used to create objects
// These are called constructor functions
// for you to create a constructor function, you need to append the new keyword before the function
function Employee(firstname, lastname, gender, designation) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.gender = gender;
    this.designation = designation;
}


const emp1 = new Employee("Jim", "Halpert", "M", "Sales Representative");
const emp2 = new Employee("Michael", "Scott", "M", "Regional Manager");

console.log(emp1);
console.log(emp2);
