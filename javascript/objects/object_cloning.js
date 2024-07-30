let src = {
    age:12,
    wt: 56,
    ht:180,
    newname : "testingname"
};

//object cloning
let newobj = {...src};  //spread operator for cloning
// let newobj = src; //if you used this for cloning then any changes in the main object
//will reflect here also
src.age = 20; //this will only modify the src object.
//newobj will remain same
console.log(newobj);
console.log(src); 