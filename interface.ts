interface  User {
    readonly dbId: number
    email: string,
    userId: number,
    googleToken?: string,
    // startTrail: ()=> string
    startTrail(): string,
    getCuopon(couponname:string, value:number): number
}


const hitesh: User = {
    dbId: 90, 
    email:"ab",
    githubToken:"h", 
    userId:2, 
    startTrail:()=> {
        return "Abhishek"
    },
    getCuopon:(name:"Abhisek", val:90)=>{
        return 10
    }
}