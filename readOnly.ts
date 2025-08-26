type User = {
    readonly _id: string
    name:string
    email: string
    isActive:boolean
     homeTown?:string
}

function createUser (u: User){

}


let myUser: User = {
    _id: "1234",
    name: "Abhis",
    email:"don",
    isActive: false,
   
}


myUser.email = "ABHI@gmail.com"
// it not allow cause we give there read only
// myUser._id = "hr"

console.log(myUser.email)

export {}