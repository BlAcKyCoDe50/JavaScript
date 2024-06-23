
const BASE_URL = "https://cdn.jsdelivr.net/gh/ismartcoding/currency-api@main/latest/data.json"



  const dropdowns = document.querySelectorAll(".dropdown select");
  const btn = document.querySelector("form button")
  const fromCurr = document.querySelector(".from select")
  const toCurr= document.querySelector(".to select")



for(let select of dropdowns){
  for(currCode in countryList)
    {
      let newoption= document.createElement("option")
      newoption.innerText=currCode
      newoption.value = currCode
      if(select.name == "from" && currCode =="INR")
        {
          newoption.selected = "selected"
        }
        else if(select.name == "from" && currCode =="")
        {
          newoption.selected = "selected"
        }
      select.append(newoption)
    }
    select.addEventListener("change",(evt) => {
      updateflag(evt.target)
    })
}

const updateflag = (element)=>{
  let currCode = element.value
  let countrycode= countryList[currCode]
  let newsrc= `https://flagsapi.com/${countrycode}/flat/64.png`
  let img = element.parentElement.querySelector("img")
  img.src= newsrc
}

btn.addEventListener("click",  async(evt) =>{
  evt.preventDefault()
  let amount= document.querySelector(".amount input")
  let amtVal=amount.value
  console.log(amtVal)
  if(amtVal ==""|| amtVal<1)
    {
      amtVal=1
      amount.value="1"
    }

    // *****************main logic to convert the amount***********************
    const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`
    let response = await fetch(URL)
    // let data= await response.json();
    console.log(response)

})
