let div=document.querySelector("div")
console.log(div)
// let id=div.getAttribute("id")
// console.log(id)
// ***********inserting a new node**************

let newbtn=document.createElement("button")
// newbtn.innerText="Click me"

// div.append(newbtn)
// console.log(newbtn)

// const newNode = document.createElement("span");

//   // Get a reference to the parent node
//   const parentDiv = document.getElementById("childElement").parentNode;

//   // Begin test case [ 1 ] : Existing childElement (all works correctly)
//   let sp2 = document.getElementById("childElement");
//   parentDiv.insertBefore(newNode, sp2);
//   // End test case [ 1 ]

let newpara=document.createElement("h1");
newpara.innerText="Hello this is the new inner text added by JS"

let a=document.querySelector("body")
a.prepend(newpara)

console.log(newpara)