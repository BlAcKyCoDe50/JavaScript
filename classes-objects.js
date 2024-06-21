const employee =
{
    salary : 50000,
    calcTax()
    {
        console.log("Hellp this is the function call" + this.salary);
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

class Animal
{
    info()
    {
        console.log("info function of animal class")
    }
}

class animal2 extends Animal 
{
    info1()
    {
        console.log("info of the class animal2 ")
    }
}

let obj1= new Animal();
obj1.info()

