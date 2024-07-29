// let obj = {
//     age : 10,
//     name : "Vishuu",
//     fun : function ()
//     {
//         console.log("hello functions");
//     }
// }

// *******built-int functions in JS***************

// 1.push      5.slice         9.reduce
// 2.pop       6.splice        10. sort
// 3.shift     7.map           11.indexof
// 4.unshift   8.filter        12.find

let arr = [1,2,3,5,7,8,9];
console.log("original array: ",arr);
console.log("*******************")
//map
//map will take each value in the array and then perform the 
//certain operations on that values.
let modifiedarr = arr.map(num=>{
    num++; //this function will increase every value of elements by one
    return num
})
console.log("array after map operation: ",modifiedarr)
console.log("*******************")
//push : push the element to the end of the array
//pop : pop the element from the end
//shift : removes the leftmost or 1st element 

arr.shift();
console.log("array after shift operation: ",arr)
console.log("*******************")
//unshift : add the element to the leftmost side

arr.unshift(0)
console.log("array after the unshift operation: ",arr)
console.log("*******************")
//slice : we take a part from the array 
//NOTE: the part will be the shallow copy

console.log("array after the slice operation: ",arr.slice(1,3))
console.log("*******************")
//splice : we can change the content of the array :
//either we can insert,replace,remove 
console.log("our original array: ",arr)
arr.splice(0,1,"removed")

//splice(starting index from which removal starts,no of values to delete,value to insert)
console.log("array after splice method: ",arr)
console.log("*******************")
//filter : this function will filter out the values on 
//basis of given function

let newarr = ["index 0","index 1",2,3,4]
let ansArray = newarr.filter((value)=>{
    // if(value>5) return true
    // else return false
    if(typeof(value)=='string') return true
    else return false
})

console.log("filter operation on the array ")
console.log("Values greater than 5 are: ",ansArray)
console.log("*******************")

//reduce method : it has basically 2 pointers current and accumulator
//if we intialize the accumalator to 0 then the current will go to the first element i.e. 0 

arr.splice(0,1,0)
console.log("our array is: ",arr)
let newansarray = arr.reduce((acc,curr)=>{
    return acc+curr
},0) //here 0 means we set the accumulator to 0
console.log("new answer array after applying sum operation: ",newansarray)
console.log("*******************")
//sorting function : it will sort the array 
arr.sort()
console.log("array after applying the sorting:",arr)

console.log("*******************")

//for-each loop

arr.forEach((value,index)=>{
    console.log("value: ",value," index: ",index)
})

console.log("*******************")

//for-in loop to traverse in the objects
let obj = {
    age : 10,
    name : "Vishuu",
    fun : function ()
    {
        console.log("hello functions");
    }
}

for (let key in obj) {
    console.log("Key: ",key,"value: ",obj[key])
}

console.log("*******************")

//arrays passing in the functions
let sum = 0
// function getSum(arr)
//  {
//     arr.forEach((value)=>{
//         sum+=value
//     })
//     return sum
//  }

let getSum = (arr)=>{
    arr.forEach((value)=>{
        sum+=value
    })
    return sum
}


 let res = getSum(arr);
 console.log("sum of the array is: ",res)
