//prototype arr. __proto__
//array prototype
//string prototype
//object prototype

//add property 
arr = [1, 2, 3];
arr.__proto__.newProperty = "new value";    // array prototype

//factory function
function createUser(name, age) {
    return {
        name: name,
        age: age,
        greet() {
            console.log(`Hello, my name is ${name} and I am ${age} years old.`);
        }
    }
};
let user1 = createUser("John", 30);
let user2 = createUser("Jane", 25);
user1.greet();  // Hello, my name is John and I am 30 years old.
user2.greet();  // Hello, my name is Jane and I am 25 years old.

//new operator
// constructor function returns not start capitalized
function User(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    };
} 

let user3 = new User("Alice", 28);
let user4 = new User("Bob", 22);
user3.greet();  // Hello, my name is Alice and I am 28 years old.
user4.greet();  // Hello, my name is Bob and I am 22 years old.