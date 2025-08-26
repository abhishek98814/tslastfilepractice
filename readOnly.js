"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createUser(u) {
}
var myUser = {
    _id: "1234",
    name: "Abhis",
    email: "don",
    isActive: false,
};
myUser.email = "ABHI@gmail.com";
// it not allow cause we give there read only
// myUser._id = "hr"
console.log(myUser.email);
