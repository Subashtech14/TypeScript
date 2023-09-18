// const user: (string | number)[] = [1, "hc"];
//In tuples the order of the array is also important
let user: [string, number, boolean];

user = ["hc", 1, true];
// user = [true, 1, "true"];

let rgb: [number, number, number] = [255, 255, 255];
//type number and string
type User = [number, string];
const newUser: User = [112, "hc@gmail.com"];
newUser[1] = "hc@yahoo.com";
// newUser.push(true);