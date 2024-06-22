//event handling 
let  btn1=document.querySelector("#btn1")
btn1.onclick=()=>{
    let a=1;
    
    // console.log("button was clicked "+a+" times")
    alert("button was click "+a+"times")
    a++;
}
//event handling on the div boxes
let div=document.querySelector("div");

// div.onmouseover=()=>{
//     div.style.backgroundColor="red" 
// }

div.onmouseleave=()=>{
        div.style.backgroundColor="orange"
    }

//event listener
//changing the background color of the button through the event lister

btn1.addEventListener("click",()=>{
    btn1.style.backgroundColor="black"
})

btn1.addEventListener("onmouseleave",()=>{
    btn1.style.color="white"
})


