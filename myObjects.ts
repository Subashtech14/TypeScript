const User={
    name:'hitesh',
    email:"hitesh@lco.dev",
    isActive:true
}
function createUser({name:string,isPaid:boolean}){
}
let newUser={name:"Subash",isPaid:true};
createUser(newUser);

function createCourse():{name:string,price:number}{
    return {name:"react js",price:400};
}