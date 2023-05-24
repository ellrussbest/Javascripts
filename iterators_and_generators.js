/**
Arrays, Strings, Maps, Sets, NodeLists - built-in iterators

On this example, you'll see the evolution of how we can make our custom made iterators

1. we'll start by creating an external generator which takes in an object as an argument
2. then we'll advance to create an built-in generator within the object
3. then finally we'll use the [Symbol.iterator] to act as our generator and return a generator from our object by default
**/

// Generator
// Generator will always look for a yield. If it doesn't get the yied, it will return the 
// functions return value/undefined then change the done property to true

// let's create a generator for an Object

const obj = {
  a: "1",
  b: "2",
  c: "3"
}
function* generator() {
  // create a logic on how you want to iterate the values of your object
  // for this example we'll just use the object's keys
  
  for (let key in obj) {
    yield obj[key]
  }
  
  // because i have not specified any return value, the function will
  // by default return undefined
  
  // when the generator hits a return statement, the done property will change to true.
  // even if there will be other yields coming after the return
}


// iterators have built-in function called next()

const iter = generator();

while(true) {
    const x = iter.next();
    if(x.done === true) break;
    console.log(x.value);
}

// now we can iterate through our object with the of-iterator
for(let i of iter) {
    console.log(i);
}


// a more simplified version of the above code could be shown as below
const obj = {
  a: "1",
  b: "2",
  c: "3",
  
  *generator() {
      for(let i in this) {
          if(typeof(this[i]) === "function") return;
          yield this[i];
      }
  }
}

for (value of obj.generator()) {
    console.log(value)
}

for (value of obj.generator()) {
    console.log(value)
}


// [Symbol.iterator] It's a method that returns the iterator object.
// we can simplify our code even more by using the [Symbol.iterator]
const obj = {
  a: "1",
  b: "2",
  c: "3",
  
  *[Symbol.iterator]() {
      for(let i in this) {
        //   if(typeof(this[i]) === "function") return;
          yield this[i];
      }
  }
}

for (value of obj) {
    console.log(value)
}
