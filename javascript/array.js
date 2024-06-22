let arr=[1,2,3,4,5,6,7,8]
// console.log(arr)
// console.log(arr.length)
//strings in javascript is immutable means we can't change the string like str[0]='a' this one not work in js
//but in java or cpp strings are mutable

// for(let i=0;i<arr.length;i++) console.log(arr[i])
// using for of loop

// for (let el of arr) 
// {
//     console.log(el)    
// }

//calculate the average marks of the students in the array
let sum=0;
let marks=[85,97,44,37,76,60]
for(let el of marks)
{
    sum+=el;
}
console.log("Average marks are: "+sum/marks.length)

//slice and splice method
//slice method doesn't change the original array
console.log("sliced marks are: "+marks.slice(0,3));
//splice method takes 3 parameters/arguments and it makes the changes to the orginal array 
// arr.splice(index,no_of_elements-tod-delete,new value)

console.log("spliced method : "+marks.splice(0,2,70,80))
console.log("After making the changes to the original array: ")
console.log(marks)

let companies=["bloomberg","microsoft","Uber","google","IBM","Netflix"]

//removing the first element
companies.splice(0,1)
console.log("After removing the first element: "+companies)
console.log(companies)

//remove uber and add ola
companies.splice(1,0,"ola")
console.log("after replacing the uber with ola")
console.log(companies)
//add amazon at the end

companies.push("amazon")
console.log("after adding the amazon at the end")
console.log(companies)
