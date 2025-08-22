// while we write function like this 

// function addVal(num){
//     // so either I am giving number it allow to uppercase cause it accept any 
//     num.toUpperCase;
//     return num + 2;
// }


// addVal(90)

// export {}

// fine way to do 

function addVal(num:number){
    return num + 2;
}


addVal(90)

function getUpper(val:String){
    return val.toUpperCase()
}

getUpper("Abhis")



function signUp(name:string, email:string, isPaid:boolean){

}

signUp("a","s", false)


// try to give default value in function 

let loginUser = (name:string, email:string, isPaid:boolean =false)=>{

}
loginUser("h", "ab.a")


function addTwo(num:number){
    return   num+ "hRLLO"
}

// Either I declate number and return strung it allow so for better ts the function is under
addTwo(8)



function addValue(num:number):number{
            return num + 2
}


addValue(78)
// in arrow funtion same code 
const adVall = (num:number):number => {
    return 9;
}

// while we have two  condition in function 

// in map we have to do like

const heroes = ["Thor", "SpiderMan", "ironMan"]

heroes.map((hero):string =>{
    return `Hero is ${hero}`
})



export {}

