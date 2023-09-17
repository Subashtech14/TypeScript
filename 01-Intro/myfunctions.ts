function addTwo(num:number):number{
    return num+2;
}
console.log(addTwo(3));
function getUpper(val:string){
    return val.toUpperCase();
}
console.log(getUpper("Subash"));
function signUpUser(name:string,email:string,isPaid:boolean){
    return {name,email,isPaid};
}
console.log(signUpUser("Subash","subash@me.com",true));
function loginUser(name:string,email:string,isPaid:boolean=false){
    return {name,email};
}
console.log(loginUser("Subash","subash@me.com",true));

// function getValue(myVal:number):boolean{
//     if(myVal > 5){
//         return true;
//     }
//     return "200 OK";
// }

const getHello=(s:string):string=>{
return "hi";
}

const heros=["thor","ironman","spiderman"]
// const heros=[1,2,3]
let user=heros.map((heros:string)=>{
    return `hero is ${heros}`;
})
console.log(user);

function consoleError(errmsg:string):void{
    console.log(errmsg);
}
//never it is used for a function that never returns a value and that fucntion can't be reached
function handleError(errmsg:string):never{
    throw new Error(errmsg);
}


