
let score: number | string = 33
score = 55
score = "Abhishek"

type User = {
    name: string;
    id: number
}

type Admin = {
    userName:string;
    ids: number
}

let abhi : User | Admin = {
    name:"Abhishej",  id:5, userName:"son", ids:67
}

function getId(id:number | string){
    if(typeof id == "string"){
        return id.toLowerCase()
    }
    id + 9
}

getId(90)