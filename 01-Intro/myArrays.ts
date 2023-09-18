const superHeros: string[] = [];
const heroPowers: number[] = [];
//can assign an array of string or number
const heroPower: Array<string | number> = [];
superHeros.push("Ironman");
heroPower.push(400);
heroPower.push("400");
console.log(heroPower);

type User = {
  name: string;
  isActive: boolean;
};

const allUsers:User[] = [];
const MLModels:number[][]=[
  [255,255,255],
  []
]
allUsers.push({ name: "Subash", isActive: true });
