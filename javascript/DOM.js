// let div=document.querySelector("div")
// console.log(div)
// let id=div.getAttribute("id")
// console.log(id)
// ***********inserting a new node**************

// let newbtn=document.createElement("button")
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

// let newpara=document.createElement("h1");
// newpara.innerText="Hello this is the new inner text added by JS"

// let a=document.querySelector("body")
// a.prepend(newpara)

// console.log(newpara)

//create a button. give it a text"click me", background color of red & text color
// of white
// insert a button as the first element inside the body

let newBtn=document.createElement("button")
newBtn.innerText="Click me!!"
newBtn.style.color="white"
newBtn.style.backgroundColor="red"

document.querySelector("body").prepend(newBtn)


