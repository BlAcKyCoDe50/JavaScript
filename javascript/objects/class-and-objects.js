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

function greet(name = "Vishu", name1 = name.toUpperCase())
{
    console.log("Hello",name,name1);
}

//if the parameters are not passed while using the function then the default
//parameters will be used

// greet("newname","lastname")
greet()