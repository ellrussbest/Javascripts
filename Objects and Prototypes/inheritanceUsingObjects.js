// We have employees in a company
// An employee can be a manager but not all employees are managers

function Employee(name) {
    this.name = name;
}

Employee.prototype.getName = function () {
    console.log(this.name)
}


// we make the proto to point to employee's prototype instead of the global object
// this will enable a manager to access all functions that are in the employee's protoype
function Manager(name, department) {
    this.name = name;
    this.department = department;
    this.__proto__.__proto__ = Employee.prototype;
    this.getDepartment = function () {
        console.log(this.department)
    }
}


const manager = new Manager('Michael', 'Sales');

manager.getDepartment();
manager.getName();
