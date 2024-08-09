// class hello
// {
//     a = "I am public variable";
//     #b= "I am private member";
//     name = "testing";

//     constructor(a,b,name)
//     {
//         this.a = a;
//         this.#b =b ;
//         this.name = name;
//     }

//     // print()
//     // {
//     //     console.log(this.a); //print the public member
//     // }
//     // printprivate()
//     // {
//     //     console.log(this.#b); //printing the private member
//     // }
//    get getprivate()             //getter to get the private variable  
//     {
//         return this.#b;
//     }

//    set setprivate(a)            //setter to set the private variable
//     {
//         this.b = b;
//     }
// }

// let obj = new hello("public","private","newname");
// console.log(obj.a);
// console.log(obj.getprivate);
// console.log(obj.name);
// let a = "modified private variable";


//Default parameters

// function greet(name = "Vishu", name1 = name.toUpperCase())
// {
//     console.log("Hello",name,name1);
// }

//if the parameters are not passed while using the function then the default
//parameters will be used

// greet("newname","lastname")
// greet()

//symbols

// Symbols are unique and immutable primitive values that are often used 
// as property keys in objects. 
// Each symbol is distinct and cannot be duplicated.

let symb1 = Symbol("symbol1")
let symb2 = Symbol("symbol2")

console.log(symb1==symb2); //they never equal even the data is same 

let obj = {};
obj[symb1] = "change in symbol1"
console.log(obj[symb1]);
