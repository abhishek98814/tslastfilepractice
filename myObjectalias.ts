type User = {
    name: string;
    email: string;
    isActive: boolean
}




function createUser(user:User){
    return user;
}

console.log(createUser({name:"Abhi", email:"s", isActive:true}))







export {};