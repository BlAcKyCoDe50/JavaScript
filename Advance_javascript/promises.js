// const custompromise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("Async task is completed");
//         resolve()
//     })
// },4000);

// custompromise.then(()=>{
//     console.log("Promise consumed");
// })

new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Async task 2");
        resolve()
    },1000)
}).then(()=>{
    console.log("Async 2 is resolved");
})

//taking values from the promise
const promise = new Promise((resolve , reject)=>{
    setTimeout(() => {
        resolve({username : "Vishuu" , Branch : "CSE" , email : "abc@gmail.com"})
    }, 1000);
})

promise.then((user)=>{
    console.log(user.username);
})
let error = false;
const secondpromise = new Promise((resolve , reject)=>{
    setTimeout(()=>{
        let error = false;
        if(!error)
        {
            resolve({username : "Vishuu" , Branch : "CSE" , email : "abc@gmail.com"})
        }
        else
        {
            reject("Something went wrong with the promise")
        }
    },1000)
})

//this is called chaining when we return something from the promise the data is then
//transferred to the next chained this 
secondpromise.then((user)=>{
    console.log(user);
    return user.username;
}).then((username)=>{
    console.log(username);
}).catch((err)=>{
    console.log(err);
}).finally(()=>{
    if(error)
    {
        console.log("Promise has been rejected");
    }
    else
    {
        console.log("Promise has been resolved");
    }
})

//handling of promises with async await

const fivepromise = new Promise((resolve , reject)=>{
    setTimeout(()=>{
        let error = true;
        if(!error)
        {
            resolve({Language : "JS" , UseCase : "Development" , email : "abc@gmail.com"})
        }
        else
        {
            reject("ERROR : Error in JS")
        }
    },1000)
})

//handling the fifthpromise with async await

async function consumedfivepromise() {
    try {
        const response = await fivepromise
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumedfivepromise()

//fetching the data from the sample API

// async function getAllusers()
// {
// try {
//     const response = await fetch('https://api.github.com/users/hiteshchoudhary')
//     const data = await response.json()  
//     //await is neccessary because the response.json also take some time
//     //to execute
//     console.log(data); 
// } catch (error) {
//     console.log("E: ",error);
// }
// }

// getAllusers()

//same above thing with fetch and then 

const getAllusers = fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
    return response.json();
}).then((aboveresponse)=>{
    console.log(aboveresponse);
}).catch((error)=>{
    console.log("Error while fetching the data from the API : ",error);
})
