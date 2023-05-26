// Different types of calling a function in JavaScript
function foo() {
    console.log("Hello");
}

foo(); // Method #1
       // this(global object variable)

var obj = {
    foo: () => {
        console.log("Hello");
    }
}

obj.foo(); // Method #2
           // this(the current object)

new foo(); // Method #3
           // this(the function itself)
           
function foo() {}
foo.call(obj) // Method #4
           // You can choose for yourself which object the this property will be referring to
           // the object to be referred to is passed on the call method as a parameter
           
           
/**
    The example of the last Scenario can be showcased as follows
*/

function Bicycle(cadence, speed, gear, tirePressure) {
    this.cadence = cadence;
    this.speed = speed;
    this.gear = gear;
    this.tirePressure = tirePressure;
    this.inflateTires = () => {
        this.tirePressure += 3;
    }
}


const bicycle = new Bicycle(50, 20, 4, 25);
console.log(bicycle)

function Mechanic(name) {
    this.name = name;
    this.inflateTires = bicycle.inflateTires;
}

const mike = new Mechanic('Mike')

mike.inflateTires.call(bicycle);
console.log(bicycle)
