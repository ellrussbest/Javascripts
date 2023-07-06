/**
 * #### METHOD DECORATORS ######
 * `target` refers to the class that the decorator is applied to, 
 * `propertyKey` refers to the name of the method or property that the decorator is applied to, and 
 * `propertyDescriptor` is an object that contains the attributes of the property that the decorator is applied to. 
 * 
 * In the example I gave you earlier, `target` refers to the `Calculator` class, 
 * `propertyKey` refers to the name of the `add` method, 
 * and `propertyDescriptor` is an object that contains the `value` of the `add` method, which is the function that actually performs the addition. 
 * 
 * By modifying the `propertyDescriptor`, we can modify the behavior of the method that the decorator is applied to. 
 * In this case, we're modifying the `value` of the `add` method to log its arguments and return value.
 */

/**
 * ##### CLASS DECORATORS ######
 * In class decorators we only have one paramater which is of type function and it 
 * points to the constructor
 */

function logClass(constructor: Function) {
  console.log(`Creating instance of ${constructor.name}`);
}

function log(target: any, key: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log(`Calling ${key} with arguments: ${JSON.stringify(args)}`);
    const result = originalMethod.apply(this, args);
    console.log(`Result of ${key}: ${JSON.stringify(result)}`);
    return result;
  };

  return descriptor;
}

@logClass
class Calculator {
  @log
  add(a: number, b: number) {
    return a + b;
  }
}

const calculator = new Calculator();
calculator.add(1, 2);

/**
 * 
 */

function addGreeting(constructor: Function) {
  constructor.prototype.greeting = function() {
    console.log('Hello!');
  }
}

@addGreeting
class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const person = new Person('Alice');
person.greeting();

/**
 * Property decorators
 */

function logProperty(target: any, key: string) {
  let value = target[key];

  const getter = function() {
    console.log(`Getting value: ${value}`);
    return value;
  };

  const setter = function(newVal: any) {
    console.log(`Setting value: ${newVal}`);
    value = newVal;
  };

  Object.defineProperty(target, key, {
    get: getter,
    set: setter,
    enumerable: true,
    configurable: true
  });
}

class Person {
  @logProperty
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const person = new Person('Alice');
person.name = 'Bob';
console.log(person.name);
