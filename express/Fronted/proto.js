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