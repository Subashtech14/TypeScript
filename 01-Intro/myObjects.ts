const User = {
  name: "hitesh",
  email: "hitesh@lco.dev",
  isActive: true,
};
function createUser({ name: string, isPaid: boolean }) {}
let newUser = { name: "Subash", isPaid: true };
createUser(newUser);

function createCourse(): { name: string; price: number } {
  return { name: "react js", price: 400 };
}
//readonly means we can't change the value
type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  credcardDetails?: number;
};

function createUsers(user: User) {}
let my_User: User = {
  _id: "1",
  name: "Subash",
  email: "subash@lco.dev",
  isActive: true,
};
my_User.email = "subash@.dev";

type cardNumber = {
  cardnumber: string;
};
type cardDate = {
  carddate: string;
};
//use the existing type to create a new type
type cardDetails = cardNumber &
  cardDate & {
    cvv: number;
  };

// createUsers({_id:"1",name:"Subash",email:"subash@lco.dev",isActive:true});
