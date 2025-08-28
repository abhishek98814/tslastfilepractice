interface  User {
    readonly dbId: number
    email: string,
    userId: number,
    googleToken?: string,
    // startTrail: ()=> string
    startTrail(): string,
    getCuopon(couponname:string, value:number): number
}

// we can write code in interface again in same name 
// which is known as reopening face

interface User {
    githubToken: string
}

interface Admin extends User {
    role: string
}


const sheradon: Admin = {
    dbId: 90, 
    email:"ab", 
    userId:2, 
    startTrail:()=> {
        return "Abhishek"
    },
    getCuopon:(name:"Abhisek", val:90)=>{
        return 10
    },
    githubToken:"don",
    role:"nokar"
}