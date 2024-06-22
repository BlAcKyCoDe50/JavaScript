// function count_vowel(str)
// {
//     let cnt=0;
//     for(let el of str)
//     {
//         if(el =='a' || el=='e'|| el=='i'||el=='o'||el=='u') cnt++;
//     }
//     console.log(cnt)
// }

let str="hello"
// console.log("Vowel count in str: ")+count_vowel(str);

let arr=[1,2,3,4,5];

//for each function specically used for the arrays
// arr.forEach(function findcount(val)
// {
//     console.log(val)
// })

//basically for each will work upon the every value of the array 
//print the square of the number in the array using foreach loop

// arr.forEach(function sqrt(val)
// {
//     let sq=val*val;
//     console.log(sq);
// })

//foreach.filter method is used to filter the values in the array 
let evenarr=arr.filter(function even(val)
{
    return val%2==0   //if this value becomes the true then only it will push the value to the new array
});

console.log(evenarr)

let b=3+5+'5'
console.log(b)