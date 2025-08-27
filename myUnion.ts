
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


// we can do this 
const data: number[] = [1,3,4,6,8]
const data2: string[] = ["Abhishek", "Sanu", "Don"]

// either we have to give whole number or whole string 
const data3: number[] | string[] = [2,5,6 ]

// if we do like this this behave like any 

const data4 : (string | number | boolean )[] = ["Abhi", "Sanu", "Don", 90]


// for declare own type 
let seatAllotment: "aisle" | "middle" | "middle" 
