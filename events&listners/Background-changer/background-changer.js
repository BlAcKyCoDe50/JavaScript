const randomColor = ()=>{
    const hex = '0123456789ABCDEF'
   let  color = '#'
    for(let i = 0; i < 6 ; i++)
    {
        color+=hex[Math.floor(Math.random()*15)]
    }
    console.log(color);
    return color;
}

let colorchange_id;

const colors = randomColor();

const start = document.querySelector('#start')
const stop = document.querySelector('#stop')

const colorchange = ()=>{
    console.log("started");
    function changeBGcolor ()
    {
        document.body.style.backgroundColor = randomColor()
    }
 colorchange_id =   setInterval(changeBGcolor , 1000); 
}

const stopcolorchange = ()=>{
    console.log("stopped");
    clearInterval(colorchange_id)
    colorchange_id = null
}

start.addEventListener('click',colorchange)

stop.addEventListener('click',stopcolorchange )

