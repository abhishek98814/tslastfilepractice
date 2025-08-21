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


export {}