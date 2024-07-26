// let obj = {
//     age : 10,
//     name : "Vishuu",
//     fun : function ()
//     {
//         console.log("hello functions");
//     }
// }

let arr = [1,2,3,"A "];
console.log(arr);

let newarr = arr.map(num=>{
    num++;
    return num
})

console.log(newarr)