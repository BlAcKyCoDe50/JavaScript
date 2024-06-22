const URL= "https://cat-fact.herokuapp.com/facts";
let promise= fetch(URL)
const factpara = document.querySelector("#fact")
const btn = document.querySelector("#btn")




console.log("calling the API")
const getfacts =  async() =>{
    console.log("getting data.....")
    let response = await fetch(URL)
    // console.log(response.status)
    let data= await response.json()
    // console.log(data)
    for(let i = 0; i<data.length;i++)
        {
            factpara.innerText = data[i].text
            console.log("\n************************")
        }
}    

const main = async() =>{
    await getfacts()
    console.log("reached the end of the API function")
}

btn.addEventListener("click",main)


/*
when we cal the API then it return the response in the 
JSON format

now we apply the response.json() function to convert the 
response into the JS object (human readable format)

API CALL -> returns the json format -> apply the json() function over the 
response to convert it into the JS object.
*/
