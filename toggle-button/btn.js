let btn=document.querySelector("#mode")
let currmod="light"
let body=document.querySelector("body")

// btn.addEventListener("click",() => {
//     if(currmod=="light") {
//         currmod="dark"
//         document.querySelector("body").style.backgroundColor="black"
//     }
//         else 
//         {
//             currmod = "light"
//             document.querySelector("body").style.backgroundColor="white"
//         }
//     alert("Mode Changed ")
// })

//same thing through the classes 

// btn.addEventListener("click",() => {

//     if(currmod=="light") {
//                 currmod="dark"
//                 body.classList.add("dark")
//                 body.classList.remove("light")
//             }
//                 else 
//                 {
//                     currmod = "light"
//                     body.classList.add("light")
//                     body.classList.remove("dark")
//                 }
//             alert("Mode Changed ")

// })

document.getElementById('darkmode-toggle').addEventListener('change', function() {
    const body = document.body;
    if (this.checked) {
      body.style.backgroundColor = '#242424';
    } else {
      body.style.backgroundColor = '#ebebeb';
    }
  });
  
  
