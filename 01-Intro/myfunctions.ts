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