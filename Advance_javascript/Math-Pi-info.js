//Question: can we change the value of PI in Math.PI object
//answer is : no we can't change the value of PI beacuse when we check it's descriptor the it is
//non writable, enurmerable : false , configurable : false

// console.log(Math.PI);
// Math.PI = 5;
// // console.log(Math.PI);
// const descriptor = Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(descriptor);

//creating our own object where properties descriptor is false

const obj = {
    name : "coffee",
    price : 80,
    isavail : true
}

console.log(Object.getOwnPropertyDescriptor(obj , "name"));

Object.defineProperty(obj , "coffee",{
    writable : false,
    enumerable : false //we disabled the iteration on the properties
})

console.log(Object.getOwnPropertyDescriptor(obj , "coffee"));
