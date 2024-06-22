const employee =
{
    salary : 50000,
    calcTax()
    {
        console.log("Hello this is the function call" + this.salary);
    }
};

const employee1={
    salary: 500,
}
employee1.__proto__ = employee;

employee1.calcTax();

//***classes ************ */

// class ToyotaCar
// {
//     constructor()
//     {
//         console.log("This is the constructor call")
//     }

//     start()
//     {
//         console.log("car start...")
//         console.log("brand name is: "+this.brand)
//     }

//     stop()
//     {
//         console.log("stop")
//     }

//     setBrand(brand)
//     {
//         this.brand=brand;
//     }
// }

// let car1= new ToyotaCar();
// car1.setBrand("toyota")

/*****************OOPS************** */

// class Animal
// {
//     info()
//     {
//         console.log("info function of animal class")
//     }
// }

// class animal2 extends Animal 
// {
//     info1()
//     {
//         console.log("info of the class animal2 ")
//     }
// }

// let obj1= new Animal();
// obj1.info()

// ****************************Callback functions*******************

// function sum(a,b)
// {
//     console.log(a+b);
// }

// function calculator(a,b,sumcallback)
// {
//     sumcallback(a,b)
// }

// calculator(1,2,sum);


//example of  callback function

// function getdata(dataid, getnextdata) {
//     setTimeout(() => {
//         console.log("data", dataid);
//         if (dataid) {
//             getnextdata();
//         }
//     }, 2000);
// }


// //callback hell 
// getdata(1, () => {
//     console.log("getting data 2");
//     getdata(2, () => {
//         console.log("getting data 3");
//         getdata(3, () => {
//             console.log("getting data 4");
//             getdata(4, () => {
//                 console.log("All data fetched");
//             });
//         });
//     });
// });

// ******************Promises in JS*******************

// let promise= new Promise((resolve,reject)=>{
//     console.log("I am Promise")
// })

//Async await : async await always returns a promise

function api()
{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("weather data")
            resolve(200)
        }, 3000);
    })
}

async function getweatherdata()
{
    await api()
}

getweatherdata()