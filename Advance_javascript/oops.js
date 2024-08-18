//constructor function

function user(username , logincnt , isloggedin)
{
    this.username = username;
    this.logincnt = logincnt;
    this.isloggedin = isloggedin;
}

const userone = new  user("vishuu" , 5 , true)
// console.log(userone.logincnt);
const usertwo =new  user("ABCD" , 3 ,true);
console.log(usertwo);
console.log(userone);  

const createuser = function(username , score){
        this.username  = username;
        this.score = score;
}

createuser.prototype.increment = function(){this.score++;}
createuser.prototype.printme = function(){console.log(`score is ${this.score}`);}

const firstusr = new createuser("name1", 50)
const secondusr = new createuser("name2", 80)

console.log(firstusr);
firstusr.increment()
firstusr.printme()

//creating a prototype that is accessble in all objects like: array , string etc;

// Object.prototype.testing = function()
// {
//     console.log("testing function is avalaible in all the objects ");
// }

// createuser.testing()
// let str = "abcde"
// str.testing()
// let arr = [1,2,3,4]
// arr.testing()

//method for triming the string

String.prototype.truelength = function()
{
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}
//this program will trim the space and return the length without spaces
"hitesh singh  ".truelength()
