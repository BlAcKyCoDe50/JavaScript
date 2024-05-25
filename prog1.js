console.log("Hello");
a=5;
n=10;
console.log(a+n);

const student={
    Fullname: "student1",
    age: 20,
    Rank:1,
    isPass:true,
};

console.log(student);

//Alert function for popup

// alert("This is the alert message ");

//prompt message
// let name=prompt("Enter your name: ");
// console.log("Hello "+name);

/****************************** */
//for in loop is used for iterate over strings and array's 

Fullname="hello";
i=0;
for(let str in Fullname )
    {
        i++;
        console.log("Fullname["+i+"]: "+str)
    }

// ************for in loop for iterating over the objects*****

let customer={
    name:"cust1",
    custid:100,
    ismember:true,
};

//this for loop iterate over the keys and find the keys of the objects

for(let key in customer)
    {
        console.log("key =",key, " value= ",customer[key]);
    }