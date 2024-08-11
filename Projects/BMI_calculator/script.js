const form = document.querySelector('form')
form.addEventListener('submit',(event)=>{
    event.preventDefault() //this function will prevent the default action of the form

  const height =   parseInt(document.querySelector('#height').value)
  const weight =   parseInt(document.querySelector('#weight').value)
  const calbmi = document.querySelector('#bmi')
  const results =   document.querySelector('#result')

 if(height === '' || height < 0 || isNaN(height))
 {
    results.innerHTML = 'Please give a valid height';
 }
  
 else if(weight === '' || weight < 0 || isNaN(weight))
    {
       results.innerHTML = 'Please give a valid weight';
    }
else{
    const bmi = (weight/((height*height)/10000)).toFixed(2) //tofixed(2) is a function that displays the value upto 2
    
    calbmi.innerHTML = `<span>Your BMI is : ${bmi}</span>`
    if(bmi < 18.6)
    {
        results.innerHTML = "You are under weight";
    }
    else if(bmi >= 18.6 && bmi <=24.9)
    {
        results.innerHTML = "You are in Normal range";
    }
    
    else{
        results.innerHTML = "You are over weight";
    }
    }
})