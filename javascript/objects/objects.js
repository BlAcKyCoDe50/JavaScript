// let obj1  =
// {
//     name : "myname",
//     addresss: " LPU",
//     [mysymbol] : "key1",
//     email : "hell@gmail.com",
//     isloggedin : false,
//     lastlogindays : ["monday","tuesday","wednesday"]
// }

// var mysymbol = Symbol("this is the symbol")

// obj1.email = "hello2@gmail.com";
// Object.freeze(obj1.email); //we cannot change the value 
// // Object.freeze(obj1) // we cannot make changes to the object


// obj1.greetfun = ()=>{
//     console.log("Hello from the function");
//     // return "Hello from the function"  it returns the undefined 
// }

// console.log(obj1.greetfun());

// const obj2 = {
//     isloggedin : true,
//     name : {
//         firstname : "firstname",
//         middlename : "middlename",
//         innerobj : {
//             msg : "innerobj"
//         },
//         lastname : "lastname",
//     },
//     email : "emailabc@gmail.com",
// }

// console.log(obj2.name.innerobj.msg);

let obj2 ={1:"a",2:"b",c:"c"};
let obj3 = {4:"z",5:"e"};

// const obj4 = {...obj2, ...obj3}
// console.log(obj4);

// for (const key in obj2) {
//     console.log(obj2[key]);
// }

// for (const key  of obj2) {
//     console.log(key);
// }

const arr = ["js","ruby","java","python","cpp"]
const arr1 = [1,2,3,4]

arr1.forEach( function (value){
    console.log(value);
})

//using for-each loop
console.log("array after applying increment function: ");
function increment(item)
{
    return item+1;
}

// arr1.forEach( (item, increment(item)))

// arr1.forEach((item)=>{   //but this does not modfy the original array
//     console.log(increment(item));
// })

//now modifying the original array

arr1.forEach((value,index,array)=>{
    array[index] = increment(value)
})

console.log(arr1);
