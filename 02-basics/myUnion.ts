//Union is used to combine multiple types into one type
let score: number | string | boolean = 100;
score = 44;
score = "55";

type Users = {
  name: string;
  id: number;
};
type Admin = {
  username: string;
  id: number;
};

let hithesh: Users | Admin = { name: "hitesh", id: 334 };
hithesh = { username: "hc", id: 334 };
function getDbId(id: number | string) {
  //making some API calls
  console.log(`DB id is : ${id}`);
}
getDbId(3);
getDbId("3");
function getDbIds(id: number | string) {
  if (typeof id === "string") {
    id.toLowerCase();
  } else {
    id = id + 2;
  }
}
//This will give an error because that need all the value must be string or number
// const data: string[] |number [] = ["1", 2, 3];
const data: Array<string | number> = ["1", 2, 3];
//or
const data2: (string | number)[] = ["1", 2, 3];
//Strict assign
let pi:3.14=3.14;
console.log(pi);

let seatAllotment:"aisle" | "middle" | "window";
//error because seatAllotment should be with the three types
// seatAllotment="aisl";
