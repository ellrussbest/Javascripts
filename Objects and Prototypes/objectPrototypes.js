// Prototypes
// Whenever you create a function it will automatically create a prototype
// object within the function e.g.
function foo() {}
foo.prototype

// Whenever you create an object using the new keyword and a function
// the object will automatically create __proto__ which will point to the
// function's prototype e.g.
const bar = new foo()
bar.__prototype__

// these two things point to the same object i.e
foo.prototype === bar.__prototype__

console.log(foo.prototype === bar.__proto__)


// This is what happens under the hood
/** _________________________   **/

function brr() {
    const pr = {}; // this represents the prototype
    this.__pr__ = this.abstract; // this represents the __protoype__ 
}


const arr = new brr() // this will create __pr__ for the new object which points to the pr object of the parent function

console.log(arr.__pr__ === brr.pr) // evaluates to true

console.log(arr.pr) // evaluates to undefined
